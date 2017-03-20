import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonGroup } from 'react-bootstrap';

import { addNewProductRequest, updateProductRequest } from './actions'
import { selectedProductSelector } from './selectors';

import FormInputField from '../components/FormInputField';

const validate = values => {

  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.price) {
    errors.price = 'Required'
  } else if (isNaN(Number(values.price))) {
    errors.price = 'Must be a number'
  } else if (Number(values.price) < 0) {
    errors.price = 'Price must be equal or greater than 0'
  }

  return errors
}

const toNumber = value => Number(value);

let FormProduct = ({selectedProduct, handleSubmit, addNewProduct, updateProduct, load, pristine, reset, submitting }) => {
  const submitFn = selectedProduct ? updateProduct : addNewProduct
  return (
    <form onSubmit={handleSubmit(submitFn)}>

      <div>
        <div>
          <Field
            name="name"
            type="text"
            component={FormInputField}
            label="Name"
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            name="price"
            type="number"
            component={FormInputField}
            label="Price"
            parse={toNumber}
          />
        </div>
      </div>
      <div>
        <ButtonGroup>
          { selectedProduct ?  <Button bsStyle="info" type="submit" disabled={pristine || submitting}>Submit Changes</Button> :
                                <Button bsStyle="success" type="submit" disabled={pristine || submitting}>Add New Product</Button> }
          <Button type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</Button>
        </ButtonGroup>
      </div>
    </form>
  )
}


FormProduct = reduxForm({
  form: 'productFrom',
  validate
})(FormProduct);


function mapStateToProps (state) {
  return {
    selectedProduct: selectedProductSelector(state),
    initialValues: selectedProductSelector(state) || {name: "", price: 0}
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addNewProduct: (values) => dispatch(addNewProductRequest(values)),
    updateProduct: (values) => dispatch(updateProductRequest(values))
  }
}


FormProduct = connect(mapStateToProps, mapDispatchToProps)(FormProduct);

export default FormProduct;
