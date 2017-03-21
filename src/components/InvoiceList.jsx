import React, { PropTypes } from 'react';
import { Table, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InvoiceList = ({ invoicesList, onDeleteClick }) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Customer</th>
          <th>Discount</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          invoicesList.length ? (
            invoicesList.map((invoice, index) => {
              return (
                <tr key={index}>
                  <td>{invoice.id}</td>
                  <td>{invoice.customer_id}</td>
                  <td>{invoice.discount}</td>
                  <td>{invoice.total}</td>
                  <td>
                    <ButtonGroup bsSize="small">
                      <Button
                        bsStyle="danger"
                        onClick={() => onDeleteClick(invoice.id)}
                      >
                        {'Delete'}
                      </Button>
                      <Button
                        bsStyle="link"
                      >
                        <Link to={`/invoices/${invoice.id}`}>{'Edit'}</Link>
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

InvoiceList.propTypes = {
  invoicesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    customer_id: PropTypes.number.isRequired,
    discount: PropTypes.number,
    total: PropTypes.number
  }).isRequired).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func
}

export default InvoiceList;
