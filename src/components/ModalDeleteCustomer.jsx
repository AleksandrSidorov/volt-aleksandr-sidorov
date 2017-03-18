import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDeleteCustomer = ({ customer, show, onHide, onDeleteClick }) => {
  const id = customer ? customer.id : null;
  return (
    <div className="static-modal">
      <Modal show={show} onHide={() => onHide()}>
        <Modal.Header>
          <Modal.Title>Delete Customer ID{id}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Do you really want to delete {customer ? customer.name : null} customer?
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => onHide()}>{'Close'}</Button>
          <Button
            bsStyle="primary"
            onClick={() => onDeleteClick(id)}
          >
            {'Delete'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

ModalDeleteCustomer.propTypes = {
  customer: PropTypes.object,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}

export default ModalDeleteCustomer;
