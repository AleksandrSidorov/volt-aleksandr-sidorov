import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

import FormInputField from '../components/FormInputField';
import InvoiceItemsList from '../components/InvoiceItemsList';

import { selectedInvoiceItemSelector } from './selectors';

import {
  clearInvoiceItems,
  getInvoiceItems,
  deleteInvoiceItemRequest,
  addNewInvoiceItemRequest,
} from './actions';

class InvoiceItems extends Component {

  componentDidMount() {
    if (this.props.invoiceItemsList.length == 0) {
      this.props.getInvoiceItems(this.props.selectedInvoiceId);
    }
  }

  componentWillUnmount() {
    this.props.clearInvoiceItems();
  }

  render() {
    return (
      <form>
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
          <InvoiceItemsList invoiceItemsList={this.props.invoiceItemsList} />
        </div>
      </form>
    )
  }
}

InvoiceItems = reduxForm({
  form: 'invoiceItemsFrom',
})(InvoiceItems);

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
    clearInvoiceItems: () => dispatch(clearInvoiceItems()),
    getInvoiceItems: (id) => dispatch(getInvoiceItems(id)),
    deleteInvoiceItem: (id) => dispatch(deleteInvoiceItemRequest(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceItems);
