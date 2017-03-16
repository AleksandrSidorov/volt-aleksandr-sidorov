import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { getAllCustomers, deleteCustomerRequest } from '../actions';

class Customers extends Component {

  componentDidMount() {
    this.props.getAllCustomers();
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        {
          this.props.isFetching ? <p>Loading...</p> : null
        }
        <Table striped condensed hover>
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
              this.props.customersList.length ? (
                this.props.customersList.map((customer, index) => {
                  return (
                    <tr key={index}>
                      <td>{customer.id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.address}</td>
                      <td>{customer.phone}</td>
                      <td><button onClick={() => this.props.deleteCustomer(customer.id)}>Delete</button></td>
                    </tr>
                  )
                })
              ) : null
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    customersList: state.customers.customersList,
    isFetching: state.customers.isFetching,
    errorMessage: state.customers.errorMessage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCustomers: () => dispatch(getAllCustomers()),
    deleteCustomer: (id) => dispatch(deleteCustomerRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
