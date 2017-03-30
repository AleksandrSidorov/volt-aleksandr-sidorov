import React from 'react';
import { Table, Button } from 'react-bootstrap'

const InvoiceItemsList = ({ invoiceItemsList, productsList }) => {
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
          invoiceItemsList.length && productsList.length ? (
            invoiceItemsList.map((ii, index) => {
              const prod = productsList.filter(product => {
                return product.id == ii.product_id
              })[0];
              console.log(productsList);
              console.log(ii.product_id);
              return (
                <tr key={index}>
                  <td>{prod.name}</td>
                  <td>{prod.price}</td>
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
            ) : <tr><td>Loading...</td></tr>
          }
        </tbody>
      </Table>
  )
}

export default InvoiceItemsList;
