import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonGroup } from 'react-bootstrap';

import { addNewInvoiceRequest, updateInvoiceRequest } from './actions'
import { selectedInvoiceSelector } from './selectors';

import FormInputField from '../components/FormInputField';

const validate = values => {
  const errors = {}
  if (!values.customer_id) {
    errors.customer = 'Required'
  }
  if (values.discount.length == 0) {
    errors.discount = 'Required'
  } else if (isNaN(Number(values.discount))) {
    errors.discount = 'Must be a number'
  } else if (Number(values.discount) < 0) {
    errors.discount = 'Price must be equal or greater than 0'
  }
  return errors
}

const toNumber = value => Number(value);

const positiveNumber = value => {
  if (value < 0 ) return 0;
  return value;
}

let FormInvoice = ({selectedInvoice, handleSubmit, addNewInvoice, updateInvoice, load, pristine, reset, submitting }) => {
  const submitFn = selectedInvoice ? updateInvoice : addNewInvoice
  return (
    <form onSubmit={handleSubmit(submitFn)}>

      <div>
        <Field
          name="customer_id"
          type="text"
          component="select"
          label="Customer"
        >
          <option value="1">Customer Test 1</option>
          <option value="2">Customer Test 2</option>
          <option value="3">Customer Test 3</option>
        </Field>
      </div>
      <div>
        <Field
          name="discount"
          type="number"
          component={FormInputField}
          label="Discount (%)"
          parse={toNumber}
          normalize={positiveNumber}
        />
      </div>
      <div>
        <Field
          name="addproduct"
          type="text"
          component="select"
          label="Add Product"
        >
          <option value="1">Test 1</option>
          <option value="2">Test 2</option>
          <option value="3">Test 3</option>
        </Field>
      </div>
      <div>
        <ButtonGroup>
          { selectedInvoice ?  <Button bsStyle="info" type="submit" disabled={pristine || submitting}>Submit Changes</Button> :
                                <Button bsStyle="success" type="submit" disabled={pristine || submitting}>Add New Invoice</Button> }
          <Button type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</Button>
        </ButtonGroup>
      </div>
    </form>
  )
}


FormInvoice = reduxForm({
  form: 'productFrom',
  validate
})(FormInvoice);


function mapStateToProps (state) {
  return {
    selectedInvoice: selectedInvoiceSelector(state),
    initialValues: selectedInvoiceSelector(state) || {name: "", discount: 0}
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addNewInvoice: (values) => dispatch(addNewInvoiceRequest(values)),
    updateInvoice: (values) => dispatch(updateInvoiceRequest(values))
  }
}


FormInvoice = connect(mapStateToProps, mapDispatchToProps)(FormInvoice);

export default FormInvoice;
