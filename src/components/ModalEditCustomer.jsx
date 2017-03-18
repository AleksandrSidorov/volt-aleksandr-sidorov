import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

import FormCustomer from '../containers/FormCustomer'

const ModalEditCustomer = ({ customer, show, onHide }) => {
  const id = customer ? customer.id : null;
  return (
    <div className="static-modal">
      <Modal show={show} onHide={() => onHide()}>
        <Modal.Header>
          <Modal.Title>{'Edit Customer'}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Form for Customer {id} here.
          <FormCustomer />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => onHide()}>{'Close'}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

ModalEditCustomer.propTypes = {
  customer: PropTypes.object,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
}

export default ModalEditCustomer;
