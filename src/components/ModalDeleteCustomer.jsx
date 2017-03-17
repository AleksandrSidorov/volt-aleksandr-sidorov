import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDeleteCustomer = ({ customerId, show, onHide, onDeleteClick }) => {
  return (
    <div className="static-modal">
      <Modal show={show} onHide={() => onHide()}>
        <Modal.Header>
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Do you really want to delete customer with ID {customerId}?
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => onHide()}>{'Close'}</Button>
          <Button
            bsStyle="primary"
            onClick={() => onDeleteClick(customerId)}
          >
            {'Delete'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

ModalDeleteCustomer.propTypes = {
  customerId: PropTypes.number,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}

export default ModalDeleteCustomer;
