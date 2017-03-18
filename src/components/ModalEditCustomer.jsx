import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

import FormCustomer from '../containers/FormCustomer'

const ModalEditCustomer = ({ customer, show, onHide }) => {
  const id = customer ? customer.id : null;
  return (
    <div className="static-modal">
      <Modal show={show} onHide={() => onHide()}>
        <Modal.Header>
          <Modal.Title>{id ? 'Edit Customer' : 'Add New Customer'}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
  customer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string
  }),
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
}

export default ModalEditCustomer;
