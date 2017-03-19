import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDelete = ({ item, itemName, show, onHide, onDeleteClick }) => {
  const id = item ? item.id : null;
  return (
    <div className="static-modal">
      <Modal show={show} onHide={() => onHide()}>
        <Modal.Header>
          <Modal.Title>Delete {itemName} ID{id}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Do you really want to delete {item ? item.name : null} {itemName}?
        </Modal.Body>

        <Modal.Footer>
          <Button
            bsStyle="danger"
            onClick={() => onDeleteClick(id)}
          >
            {'Delete'}
          </Button>
          <Button onClick={() => onHide()}>{'Close'}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

ModalDelete.propTypes = {
  item: PropTypes.object,
  itemName: PropTypes.string,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}

export default ModalDelete;
