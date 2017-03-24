import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonGroup } from 'react-bootstrap';

import { addNewInvoiceRequest, updateInvoiceRequest } from './actions'
import { selectedInvoiceSelector } from './selectors';

import InvoiceItems from '../InvoiceItems/InvoiceItems';
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

let FormInvoice = ({
  selectedInvoice,
  customersList,
  productsList,
  handleSubmit,
  addNewInvoice,
  updateInvoice,
  load,
  pristine,
  reset,
  submitting
}) => {
  const submitFn = selectedInvoice ? updateInvoice : addNewInvoice
  return (
    <div>
    <form onSubmit={handleSubmit(submitFn)}>
      <Field
        name="customer_id"
        type="text"
        componentClass="select"
        component={FormInputField}
        label="Customer"
      >
        {
          customersList.map(customer => {
            return <option key={customer.id} value={customer.id}>{customer.name}</option>
          })
        }
      </Field>
      <Field
        name="discount"
        type="number"
        component={FormInputField}
        label="Discount (%)"
        parse={toNumber}
        normalize={positiveNumber}
      />
      <div>
        <ButtonGroup>
          { selectedInvoice ?  <Button bsStyle="info" type="submit" disabled={pristine || submitting}>Submit Changes</Button> :
          <Button bsStyle="success" type="submit" disabled={pristine || submitting}>Add New Invoice</Button> }
          <Button type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</Button>
        </ButtonGroup>
      </div>
    </form>
    <InvoiceItems />
  </div>
  )
}


FormInvoice = reduxForm({
  form: 'productFrom',
  validate
})(FormInvoice);


function mapStateToProps (state) {
  return {
    selectedInvoice: selectedInvoiceSelector(state),
    customersList:  state.customers.customersList,
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
