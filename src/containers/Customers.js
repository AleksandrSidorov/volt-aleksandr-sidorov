import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getAllCustomers } from '../actions';

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
        {
          this.props.customersList.length ? (
            this.props.customersList.map((customer, index) => {
              return <div key={index}>
                <p>Name: {customer.name}</p>
                <p>Address: {customer.address}</p>
              </div>
            })
          ) : null
        }
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
    getAllCustomers: () => dispatch(getAllCustomers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
