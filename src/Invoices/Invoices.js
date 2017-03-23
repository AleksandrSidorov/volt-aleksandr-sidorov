import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Button } from 'react-bootstrap';

import FormInvoice from './FormInvoice'
import InvoiceList from '../components/InvoiceList';
import ModalDelete from '../components/ModalDelete';

import { selectedInvoiceSelector } from './selectors';

import {
  getAllInvoices,
  deleteInvoiceRequest,
  addNewInvoiceRequest,
  showDeleteInvoiceModal,
  hideDeleteInvoiceModal,
} from './actions';
import { getAllCustomers } from '../Customers/actions';

class Invoices extends Component {

  componentDidMount() {
    if (this.props.invoicesList.length == 0) {
      console.log("List in state is empty. Receiving invoices from DB.");
      this.props.getAllInvoices();
    }

    if (this.props.customersList.length == 0) {
      console.log("Receiving customers from DB.");
      this.props.getAllCustomers();
    }
  }

  render() {
    return (
      <div>
        <Helmet title="Invoices" />
        <h2>Invoices</h2>
        <Button><Link to="/invoices/new">{'Add New Invoice'}</Link></Button>
        {
          this.props.isFetching ? <p>Loading...</p> : null
        }
        <InvoiceList
          invoicesList={this.props.invoicesList}
          customersList={this.props.customersList}
          onDeleteClick={this.props.showDeleteInvoiceModal}
        />
        <ModalDelete
          item={this.props.selectedInvoice}
          itemName='invoice'
          show={this.props.isModalDelete}
          onHide={this.props.hideDeleteInvoiceModal}
          onDeleteClick={this.props.deleteInvoice}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    invoicesList: state.invoices.invoicesList,
    selectedInvoiceId: state.invoices.selectedInvoiceId,
    isFetching: state.invoices.isFetching,
    errorMessage: state.invoices.errorMessage,
    isModalDelete: state.invoices.isModalDelete,
    selectedInvoice: selectedInvoiceSelector(state),

    customersList: state.customers.customersList,
    selectedCustomerId: state.customers.selectedCustomerId,
    isFetchingCustomers: state.customers.isFetching,
    errorMessageCustomers: state.customers.errorMessage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllInvoices: () => dispatch(getAllInvoices()),
    getAllCustomers: () => dispatch(getAllCustomers()),
    deleteInvoice: (id) => dispatch(deleteInvoiceRequest(id)),
    showDeleteInvoiceModal: (id) => dispatch(showDeleteInvoiceModal(id)),
    hideDeleteInvoiceModal: () => dispatch(hideDeleteInvoiceModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoices);
