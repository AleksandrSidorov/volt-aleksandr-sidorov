import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonGroup } from 'react-bootstrap';

import { addNewCustomerRequest, updateCustomerRequest } from './actions'
import { selectedCustomerSelector } from './selectors';

import FormInputField from '../components/FormInputField';

let FormCustomer = ({selectedCustomer, handleSubmit, addNewCustomer, updateCustomer, load, pristine, reset, submitting }) => {
  const submitFn = selectedCustomer ? updateCustomer : addNewCustomer
  return (
    <form onSubmit={handleSubmit(submitFn)}>

      <div>
        <label>Name</label>
        <div>
          <Field name="name" component={FormInputField} type="text" placeholder="Name"/>
        </div>
      </div>
      <div>
        <label>Address</label>
        <div>
          <Field name="address" component={FormInputField} type="text" placeholder="Address"/>
        </div>
      </div>
      <div>
        <label>Phone</label>
        <div>
          <Field name="phone" component={FormInputField} type="text" placeholder="Phone"/>
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
  form: 'customerFrom'
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
