import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

//import FormInputField from '../components/FormInputField';

let FormCustomer = ({ handleSubmit, load, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>Name</label>
        <div>
          <Field name="name" component="input" type="text" placeholder="Name"/>
        </div>
      </div>
      <div>
        <label>Address</label>
        <div>
          <Field name="address" component="input" type="text" placeholder="Address"/>
        </div>
      </div>
      <div>
        <label>Phone</label>
        <div>
          <Field name="phone" component="input" type="text" placeholder="Phone"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</button>
      </div>
    </form>
  )
}


FormCustomer = reduxForm({
  form: 'customerFrom'
})(FormCustomer)

export default FormCustomer
