import { combineReducers } from 'redux';
import {
  INVOICES_FETCH_REQUESTED,
  INVOICES_FETCH_RECEIVED,
  INVOICES_FETCH_FAILED,
  INVOICE_REMOVE,
  INVOICE_INSERT,
  INVOICE_UPDATE_SUCCESS,
  INVOICE_SET_SELECTED_ID,
  INVOICE_CLEAR_SELECTED_ID,
  INVOICE_SHOW_MODAL_DELETE,
  INVOICE_HIDE_MODAL_DELETE,
  INVOICE_SHOW_MODAL_EDIT,
  INVOICE_HIDE_MODAL_EDIT,
  INVOICEITEMS_FETCH_REQUESTED,
  INVOICEITEMS_FETCH_RECEIVED,
  INVOICEITEMS_FETCH_FAILED,
} from './actions';

const initialState = {
  invoicesList: [],
  invoiceItemsList: [],
  selectedInvoiceId: null,
  isFetching: false,
  errorMessage: null,
  isModalDelete: false,
  isModalEdit: false
}

export default function invoices(state = initialState, action) {
  switch(action.type) {
    case INVOICES_FETCH_REQUESTED:
      return {
        ...state,
        invoicesList: [],
        isFetching: true,
        errorMessage: null
      }
    case INVOICES_FETCH_RECEIVED:
      return {
        ...state,
        invoicesList: action.invoices,
        isFetching: false,
        errorMessage: null
      }
    case INVOICES_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.err
      }

    case INVOICE_REMOVE:
      return {
        ...state,
        invoicesList: state.invoicesList.filter( invoice => invoice.id !== action.id)
      }

    case INVOICE_INSERT:
      return {
        ...state,
        invoicesList: state.invoicesList.concat(action.invoice)
      }

    case INVOICE_UPDATE_SUCCESS:
      return {
        ...state,
        invoicesList: state.invoicesList
          .map((invoice, index) => invoice.id == action.id ? action.invoice : invoice)
      }

    case INVOICE_SET_SELECTED_ID:
      console.log('Reducer. Set ii', action.id);
      return {
        ...state,
        selectedInvoiceId: action.id
      }

    case INVOICE_CLEAR_SELECTED_ID:
      return {
        ...state,
        selectedInvoiceId: null
      }


    // Modals
    case INVOICE_SHOW_MODAL_DELETE:
      return {
        ...state,
        isModalDelete: true,
        selectedInvoiceId: action.id
      }
    case INVOICE_HIDE_MODAL_DELETE:
      return {
        ...state,
        isModalDelete: false,
        selectedInvoiceId: null
      }

    case INVOICE_SHOW_MODAL_EDIT:
      return {
        ...state,
        isModalEdit: true,
        selectedInvoiceId: action.id
      }

    case INVOICE_HIDE_MODAL_EDIT:
      return {
        ...state,
        isModalEdit: false,
        selectedInvoiceId: null
      }

    // Invoice items
    case INVOICEITEMS_FETCH_REQUESTED:
      return {
        ...state,
        invoiceItemsList: [],
        isFetching: true,
        errorMessage: null
      }
    case INVOICEITEMS_FETCH_RECEIVED:
      return {
        ...state,
        invoiceItemsList: action.invoices,
        isFetching: false,
        errorMessage: null
      }
    case INVOICEITEMS_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.err
      }

    default:
      return state;
  }
}
