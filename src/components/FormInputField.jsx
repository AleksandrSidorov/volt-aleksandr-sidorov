import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const FormInputField = ({ input, type, label, meta: { touched, error }, ...custom }) => {
  const val = touched && error ? 'error' : ( touched && !error ? 'success' : null);
  return (
    <FormGroup controlId={input.name} validationState={val}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type={type} {...input} {...custom} />
      <HelpBlock>{touched && error && <span>{error}</span>}</HelpBlock>
    </FormGroup>
  )
}

export default FormInputField;
