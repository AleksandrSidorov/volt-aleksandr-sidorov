import { combineReducers } from 'redux';
import {
  CUSTOMERS_FETCH_REQUESTED,
  CUSTOMERS_FETCH_RECEIVED,
  CUSTOMERS_FETCH_FAILED,
} from '../actions';

const initialState = {
  customersList: [],
  isFetching: false,
  errorMessage: null
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
    default:
      return state;
  }
}
