import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const FormInputField = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
    <FormGroup controlId={input.name} validationState={null}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type="text" {...input} />
      <HelpBlock>{touched || error}</HelpBlock>
    </FormGroup>
  )
}

export default FormInputField;
