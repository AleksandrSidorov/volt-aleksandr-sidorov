import { combineReducers } from 'redux';
import {
  INVOICEITEMS_FETCH_REQUESTED,
  INVOICEITEMS_FETCH_RECEIVED,
  INVOICEITEMS_FETCH_FAILED,
  INVOICEITEM_REMOVE,
  INVOICEITEM_INSERT,
  INVOICEITEM_UPDATE_SUCCESS,
  INVOICEITEM_SHOW_MODAL_DELETE,
  INVOICEITEM_HIDE_MODAL_DELETE,
  INVOICEITEM_SHOW_MODAL_EDIT,
  INVOICEITEM_HIDE_MODAL_EDIT,
} from './actions';

const initialState = {
  invoiceItemsList: [],
  selectedInvoiceItemId: null,
  isFetching: false,
  errorMessage: null,
  isModalDelete: false,
  isModalEdit: false
}

export default function invoiceItems(state = initialState, action) {
  switch(action.type) {
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
        invoiceItemsList: action.invoiceItems,
        isFetching: false,
        errorMessage: null
      }
    case INVOICEITEMS_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.err
      }

    case INVOICEITEM_REMOVE:
      return {
        ...state,
        invoiceItemsList: state.invoiceItemsList.filter( invoiceItem => invoiceItem.id !== action.id)
      }

    case INVOICEITEM_INSERT:
      return {
        ...state,
        invoiceItemsList: state.invoiceItemsList.concat(action.invoiceItem)
      }

    case INVOICEITEM_UPDATE_SUCCESS:
      return {
        ...state,
        invoiceItemsList: state.invoiceItemsList
          .map((invoiceItem, index) => invoiceItem.id == action.id ? action.invoiceItem : invoiceItem)
      }

    case INVOICEITEM_SHOW_MODAL_DELETE:
      return {
        ...state,
        isModalDelete: true,
        selectedInvoiceItemId: action.id
      }
    case INVOICEITEM_HIDE_MODAL_DELETE:
      return {
        ...state,
        isModalDelete: false,
        selectedInvoiceItemId: null
      }

    case INVOICEITEM_SHOW_MODAL_EDIT:
      return {
        ...state,
        isModalEdit: true,
        selectedInvoiceItemId: action.id
      }

    case INVOICEITEM_HIDE_MODAL_EDIT:
      return {
        ...state,
        isModalEdit: false,
        selectedInvoiceItemId: null
      }

    default:
      return state;
  }
}
