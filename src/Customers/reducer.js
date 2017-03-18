import { combineReducers } from 'redux';
import {
  CUSTOMERS_FETCH_REQUESTED,
  CUSTOMERS_FETCH_RECEIVED,
  CUSTOMERS_FETCH_FAILED,
  CUSTOMER_REMOVE,
  CUSTOMER_INSERT,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_SHOW_MODAL_DELETE,
  CUSTOMER_HIDE_MODAL_DELETE,
  CUSTOMER_SHOW_MODAL_EDIT,
  CUSTOMER_HIDE_MODAL_EDIT,
} from './actions';

const initialState = {
  customersList: [],
  selectedCustomerId: null,
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

    case CUSTOMER_REMOVE:
      return {
        ...state,
        customersList: state.customersList.filter( customer => customer.id !== action.id)
      }

    case CUSTOMER_INSERT:
      return {
        ...state,
        customersList: state.customersList.concat(action.customer)
      }

    case CUSTOMER_UPDATE_SUCCESS:
      return {
        ...state,
        customersList: state.customersList
          .map((customer, index) => customer.id == action.id ? action.customer : customer)
      }

    case CUSTOMER_SHOW_MODAL_DELETE:
      return {
        ...state,
        isModalDelete: true,
        selectedCustomerId: action.id
      }
    case CUSTOMER_HIDE_MODAL_DELETE:
      return {
        ...state,
        isModalDelete: false,
        selectedCustomerId: null
      }

    case CUSTOMER_SHOW_MODAL_EDIT:
      return {
        ...state,
        isModalEdit: true,
        selectedCustomerId: action.id
      }

    case CUSTOMER_HIDE_MODAL_EDIT:
      return {
        ...state,
        isModalEdit: false,
        selectedCustomerId: null
      }

    default:
      return state;
  }
}
