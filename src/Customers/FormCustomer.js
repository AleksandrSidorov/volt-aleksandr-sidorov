import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonGroup } from 'react-bootstrap';

import { addNewCustomerRequest, updateCustomerRequest } from './actions'
import { selectedCustomerSelector } from './selectors';

import FormInputField from '../components/FormInputField';

// Redux-form validator
const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.address) {
    errors.address = 'Required'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  }
  return errors
}

// Redux-form normalizer for Phone field
// format: nnn-nnn-nnnn
const normalizePhone = (value) => {
  if(!value) return value;
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) return onlyNums;
  if (onlyNums.length <= 7) return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`;
}

let FormCustomer = ({selectedCustomer, handleSubmit, addNewCustomer, updateCustomer, load, pristine, reset, submitting }) => {
  const submitFn = selectedCustomer ? updateCustomer : addNewCustomer
  return (
    <form onSubmit={handleSubmit(submitFn)}>

      <div>
        <div>
          <Field
            name="name"
            component={FormInputField}
            type="text"
            label="Name"
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            name="address"
            component={FormInputField}
            type="text"
            label="Address"
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            name="phone"
            component={FormInputField}
            type="text"
            label="Phone"
            normalize={normalizePhone}
          />
        </div>
      </div>
      <div>
        <ButtonGroup>
          { selectedCustomer ?  <Button bsStyle="info" type="submit" disabled={pristine || submitting}>Submit Changes</Button> :
                                <Button bsStyle="success" type="submit" disabled={pristine || submitting}>Add New Customer</Button> }
          <Button type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</Button>
        </ButtonGroup>
      </div>
    </form>
  )
}


FormCustomer = reduxForm({
  form: 'customerFrom',
  validate
})(FormCustomer);


function mapStateToProps (state) {
  return {
    selectedCustomer: selectedCustomerSelector(state),
    initialValues: selectedCustomerSelector(state)
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addNewCustomer: (values) => dispatch(addNewCustomerRequest(values)),
    updateCustomer: (values) => dispatch(updateCustomerRequest(values))
  }
}


FormCustomer = connect(mapStateToProps, mapDispatchToProps)(FormCustomer);

export default FormCustomer;
