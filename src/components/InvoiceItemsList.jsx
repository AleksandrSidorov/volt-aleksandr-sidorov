import React from 'react';
import { Table, Button } from 'react-bootstrap'

const InvoiceItemsList = ({ invoiceItemsList }) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          invoiceItemsList.length ? (
            invoiceItemsList.map((ii, index) => {
              return (
                <tr key={index}>
                  <td>{ii.id}</td>
                  <td>{ii.product_id}</td>
                  <td>{ii.quantity}</td>
                  <td>
                    <Button
                      bsStyle="danger"
                      onClick={() => onDeleteClick(ii.id)}
                      >
                        {'Delete'}
                      </Button>
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

export default InvoiceItemsList;
