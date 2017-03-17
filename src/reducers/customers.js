import { combineReducers } from 'redux';
import {
  CUSTOMERS_FETCH_REQUESTED,
  CUSTOMERS_FETCH_RECEIVED,
  CUSTOMERS_FETCH_FAILED,
  CUSTOMER_REMOVE,
  CUSTOMER_SHOW_MODAL_DELETE,
  CUSTOMER_HIDE_MODAL_DELETE,
  CUSTOMER_SHOW_MODAL_EDIT,
  CUSTOMER_HIDE_MODAL_EDIT,
} from '../actions';

const initialState = {
  customersList: [],
  selectedCustomer: null,
  isFetching: false,
  errorMessage: null,
  isModalDelete: false,
  isModalEdit: false
}

export default function customers(state = initialState, action) {
  switch(action.type) {
    case CUSTOMERS_FETCH_REQUESTED:
      return {
        ...state,
        customersList: [],
        isFetching: true,
        errorMessage: null
      }
    case CUSTOMERS_FETCH_RECEIVED:
      return {
        ...state,
        customersList: action.customers,
        isFetching: false,
        errorMessage: null
      }
    case CUSTOMERS_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.err
      }
    case CUSTOMER_SHOW_MODAL_DELETE:
      return {
        ...state,
        isModalDelete: true,
        selectedCustomer: action.id
      }
    case CUSTOMER_HIDE_MODAL_DELETE:
      return {
        ...state,
        isModalDelete: false,
        selectedCustomer: null
      }

    case CUSTOMER_REMOVE:
      return {
        ...state,
        customersList: state.customersList.filter( customer => customer.id !== action.id)
      }

    case CUSTOMER_SHOW_MODAL_EDIT:
      return {
        ...state,
        isModalEdit: true,
        selectedCustomer: action.id
      }

    case CUSTOMER_HIDE_MODAL_EDIT:
      return {
        ...state,
        isModalEdit: false,
        selectedCustomer: null
      }

    default:
      return state;
  }
}
