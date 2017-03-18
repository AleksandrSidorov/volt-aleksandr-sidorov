import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Button } from 'react-bootstrap';

import CustomerList from '../components/CustomerList';
import ModalDeleteCustomer from '../components/ModalDeleteCustomer';
import ModalEditCustomer from '../components/ModalEditCustomer';
import { selectedCustomerSelector } from '../selectors';

import {
  getAllCustomers,
  deleteCustomerRequest,
  addNewCustomerRequest,
  showDeleteCustomerModal,
  hideDeleteCustomerModal,
  showEditCustomerModal,
  hideEditCustomerModal,
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
        <Button bsStyle="success" onClick={() => this.props.showEditCustomerModal(null)}>Add New Customer</Button>
        {
          this.props.isFetching ? <p>Loading...</p> : null
        }
        <CustomerList
          customersList={this.props.customersList}
          onDeleteClick={this.props.showDeleteCustomerModal}
          onEditClick={this.props.showEditCustomerModal}
        />
        <ModalDeleteCustomer
          customer={this.props.selectedCustomer}
          show={this.props.isModalDelete}
          onHide={this.props.hideDeleteCustomerModal}
          onDeleteClick={this.props.deleteCustomer}
        />
        <ModalEditCustomer
          customer={this.props.selectedCustomer}
          show={this.props.isModalEdit}
          onHide={this.props.hideEditCustomerModal}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    customersList: state.customers.customersList,
    selectedCustomerId: state.customers.selectedCustomerId,
    isFetching: state.customers.isFetching,
    errorMessage: state.customers.errorMessage,
    isModalDelete: state.customers.isModalDelete,
    isModalEdit: state.customers.isModalEdit,
    selectedCustomer: selectedCustomerSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCustomers: () => dispatch(getAllCustomers()),
    deleteCustomer: (id) => dispatch(deleteCustomerRequest(id)),
    showDeleteCustomerModal: (id) => dispatch(showDeleteCustomerModal(id)),
    hideDeleteCustomerModal: () => dispatch(hideDeleteCustomerModal()),
    showEditCustomerModal: (id) => dispatch(showEditCustomerModal(id)),
    hideEditCustomerModal: () => dispatch(hideEditCustomerModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
