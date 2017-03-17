import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import CustomerList from '../components/CustomerList';
import ModalDeleteCustomer from '../components/ModalDeleteCustomer';
import {
  getAllCustomers,
  deleteCustomerRequest,
  showDeleteCustomerModal,
  hideDeleteCustomerModal,
} from '../actions';

class Customers extends Component {

  componentDidMount() {
    if (this.props.customersList.length == 0) {
      console.log("List in state is empty. Receiving customers from DB.");
      this.props.getAllCustomers();
    }
  }

  render() {
    return (
      <div>
        <Helmet title="Customers" />
        <h2>Customers</h2>
        {
          this.props.isFetching ? <p>Loading...</p> : null
        }
        <CustomerList
          customersList={this.props.customersList}
          onDeleteClick={this.props.showDeleteCustomerModal}
          onEditClick={() => console.log('delete')}
        />
        <ModalDeleteCustomer
          customer={this.props.selectedCustomer}
          show={this.props.isModalDelete}
          onHide={this.props.hideDeleteCustomerModal}
          onDeleteClick={this.props.deleteCustomer}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    customersList: state.customers.customersList,
    selectedCustomer: state.customers.selectedCustomer,
    isFetching: state.customers.isFetching,
    errorMessage: state.customers.errorMessage,
    isModalDelete: state.customers.isModalDelete,
    isModalEdit: state.customers.isModalEdit,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCustomers: () => dispatch(getAllCustomers()),
    deleteCustomer: (id) => dispatch(deleteCustomerRequest(id)),
    showDeleteCustomerModal: (id) => dispatch(showDeleteCustomerModal(id)),
    hideDeleteCustomerModal: () => dispatch(hideDeleteCustomerModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
