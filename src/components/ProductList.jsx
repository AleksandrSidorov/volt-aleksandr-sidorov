import React, { PropTypes } from 'react';
import { Table, ButtonGroup, Button } from 'react-bootstrap';

const ProductList = ({ productsList, onDeleteClick, onEditClick }) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          productsList.length ? (
            productsList.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <ButtonGroup bsSize="small">
                      <Button
                        bsStyle="danger"
                        onClick={() => onDeleteClick(product.id)}
                      >
                        {'Delete'}
                      </Button>
                      <Button
                        bsStyle="default"
                        onClick={() => onEditClick(product.id)}
                      >
                        {'Edit'}
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              )
            })
          ) : null
        }
      </tbody>
    </Table>
  )
}

ProductList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number
  }).isRequired).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func
}

export default ProductList;
