import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Field } from 'redux-form';

import FormInputField from '../components/FormInputField';

import { selectedInvoiceItemSelector } from './selectors';

import {
  getAllInvoiceItems,
  deleteInvoiceItemRequest,
  addNewInvoiceItemRequest,
} from './actions';

class InvoiceItems extends Component {

  componentDidMount() {
    if (this.props.invoiceItemsList.length == 0) {
      console.log("List in state is empty. Receiving invoice items from DB.");
      this.props.getAllInvoiceItems(selectedInvoiceId);
    }
  }

  render() {
    return (
      <div>
        <Field
          name="addproduct"
          type="text"
          componentClass="select"
          component={FormInputField}
          label="Add Product"
        >
          {
            this.props.productsList.map(product => {
              return <option key={product.id} value={product.id}>{product.name}</option>
            })
          }
        </Field>
        <Button>Add</Button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    invoiceItemsList: state.invoiceItems.invoiceItemsList,
    selectedInvoiceItemId: state.invoiceItems.selectedInvoiceItemId,
    isFetching: state.invoiceItems.isFetching,
    errorMessage: state.invoiceItems.errorMessage,
    selectedInvoiceItem: selectedInvoiceItemSelector(state),
    productsList: state.products.productsList,
    selectedInvoiceId: state.invoices.selectedInvoiceId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllInvoiceItems: () => dispatch(getAllInvoiceItems()),
    deleteInvoiceItem: (id) => dispatch(deleteInvoiceItemRequest(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceItems);
