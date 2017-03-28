import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInvoice from './FormInvoice';

import {
  getAllInvoices,
  setSelectedInvoiceId,
  clearSelectedInvoiceId,
  getAllInvoiceItems,
} from './actions';
import { getAllCustomers } from '../Customers/actions';
import { getAllProducts } from '../Products/actions';

import { selectedInvoiceSelector } from './selectors';

class InvoiceEdit extends Component {

  componentWillMount() {
    const id = this.props.match.params.id;
    if (!isNaN(Number(id))) {
      this.props.setSelectedInvoiceId(Number(id));
    }
  }

  componentDidMount() {
    if (this.props.invoicesList.length == 0) {
      this.props.getAllInvoices();
    }

    if (this.props.customersList.length == 0) {
      this.props.getAllCustomers();
    }

    if (this.props.productsList.length == 0) {
      this.props.getAllProducts();
    }
    if (this.props.selectedInvoiceId) {
      this.props.getAllInvoiceItems(this.props.selectedInvoiceId);
    }
  }

  componentWillUnmount() {
    this.props.clearSelectedInvoiceId();
  }

  render() {
    return (
      <div>
        { this.props.selectedInvoiceId ? <h2>Edit Invoice</h2> : <h2>Create New Invoice</h2>}

        <FormInvoice />
      </div>
    )
  }
}



function mapStateToProps (state) {
  return {
    customersList: state.customers.customersList,
    selectedCustomerId: state.customers.selectedCustomerId,
    isFetchingCustomers: state.customers.isFetching,
    errorMessageCustomers: state.customers.errorMessage,

    productsList: state.products.productsList,
    selectedProductId: state.products.selectedProductId,
    isFetchingProducts: state.products.isFetching,
    errorMessageProducts: state.products.errorMessage,

    invoicesList: state.invoices.invoicesList,
    invoiseItemsList: state.invoices.invoiceItemsList,
    selectedInvoiceId: state.invoices.selectedInvoiceId,
    isFetching: state.invoices.isFetching,
    errorMessage: state.invoices.errorMessage,
    isModalDelete: state.invoices.isModalDelete,

    selectedInvoice: selectedInvoiceSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedInvoiceId: (id) => dispatch(setSelectedInvoiceId(id)),
    clearSelectedInvoiceId: () => dispatch(clearSelectedInvoiceId()),
    getAllCustomers: () => dispatch(getAllCustomers()),
    getAllProducts: () => dispatch(getAllProducts()),
    getAllInvoices: () => dispatch(getAllInvoices()),
    getAllInvoiceItems: (id) => dispatch(getAllInvoiceItems(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceEdit);
