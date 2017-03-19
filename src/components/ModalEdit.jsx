import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalEdit = ({ children, item, itemName, show, onHide }) => {
  const id = item ? item.id : null;
  return (
    <div className="static-modal">
      <Modal show={show} onHide={() => onHide()}>
        <Modal.Header>
          <Modal.Title>{id ? `Edit ${itemName} ID ${item.id}` : `Add new ${itemName}`}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {children}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => onHide()}>{'Close'}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

ModalEdit.propTypes = {
  item: PropTypes.object,
  itemName: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
}

export default ModalEdit;
