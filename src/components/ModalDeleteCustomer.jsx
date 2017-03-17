import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDeleteCustomer = ({ customer, show, onHide, onDeleteClick }) => {
  return (
    <div className="static-modal">
      <Modal show={show} onHide={() => onHide()}>
        <Modal.Header>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Do you really want to delete customer with ID {customer}?
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => onHide()}>{'Close'}</Button>
          <Button
            bsStyle="primary"
            onClick={() => onDeleteClick(customer)}
          >
            {'Delete'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalDeleteCustomer;
