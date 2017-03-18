import { combineReducers } from 'redux';
import {
  PRODUCTS_FETCH_REQUESTED,
  PRODUCTS_FETCH_RECEIVED,
  PRODUCTS_FETCH_FAILED,
  PRODUCT_REMOVE,
  PRODUCT_INSERT,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_SHOW_MODAL_DELETE,
  PRODUCT_HIDE_MODAL_DELETE,
  PRODUCT_SHOW_MODAL_EDIT,
  PRODUCT_HIDE_MODAL_EDIT,
} from './actions';

const initialState = {
  productsList: [],
  selectedProductId: null,
  isFetching: false,
  errorMessage: null,
  isModalDelete: false,
  isModalEdit: false
}

export default function products(state = initialState, action) {
  switch(action.type) {
    case PRODUCTS_FETCH_REQUESTED:
      return {
        ...state,
        productsList: [],
        isFetching: true,
        errorMessage: null
      }
    case PRODUCTS_FETCH_RECEIVED:
      return {
        ...state,
        productsList: action.products,
        isFetching: false,
        errorMessage: null
      }
    case PRODUCTS_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.err
      }

    case PRODUCT_REMOVE:
      return {
        ...state,
        productsList: state.productsList.filter( product => product.id !== action.id)
      }

    case PRODUCT_INSERT:
      return {
        ...state,
        productsList: state.productsList.concat(action.product)
      }

    case PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        productsList: state.productsList
          .map((product, index) => product.id == action.id ? action.product : product)
      }

    case PRODUCT_SHOW_MODAL_DELETE:
      return {
        ...state,
        isModalDelete: true,
        selectedProductId: action.id
      }
    case PRODUCT_HIDE_MODAL_DELETE:
      return {
        ...state,
        isModalDelete: false,
        selectedProductId: null
      }

    case PRODUCT_SHOW_MODAL_EDIT:
      return {
        ...state,
        isModalEdit: true,
        selectedProductId: action.id
      }

    case PRODUCT_HIDE_MODAL_EDIT:
      return {
        ...state,
        isModalEdit: false,
        selectedProductId: null
      }

    default:
      return state;
  }
}
