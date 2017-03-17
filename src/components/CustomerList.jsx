import React, { PropTypes } from 'react';
import { Table, ButtonGroup, Button } from 'react-bootstrap';

const CustomerList = ({ customersList, onDeleteClick, onEditClick }) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          customersList.length ? (
            customersList.map((customer, index) => {
              return (
                <tr key={index}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.address}</td>
                  <td>{customer.phone}</td>
                  <td>
                    <ButtonGroup bsSize="small">
                      <Button
                        bsStyle="danger"
                        onClick={() => onDeleteClick(customer.id)}
                      >
                        {'Delete'}
                      </Button>
                      <Button
                        bsStyle="default"
                        onClick={() => onEditClick(customer.id)}
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

CustomerList.propTypes = {
  customersList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string
  }).isRequired).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func
}

export default CustomerList;
