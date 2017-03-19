import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const FormInputField = ({ input, type, label, meta: { touched, error }, ...custom }) => {
  return (
    <FormGroup controlId={input.name} validationState={null}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type={type} {...input} />
      <HelpBlock>{touched && error && <span>{error}</span>}</HelpBlock>
    </FormGroup>
  )
}

export default FormInputField;
