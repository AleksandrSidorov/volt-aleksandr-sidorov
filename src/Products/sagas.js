import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import api from '../api';
import * as actions from './actions';


export function* getAllProducts() {
  try {
    const products = yield call(api.getProducts);
    yield put(actions.receiveAllProducts(products));
  }
  catch (err) {
    yield put(actions.receiveAllProductsFailed(err));
  }
}

export function* deleteProduct(action) {
  try {
    const result = yield call(api.deleteProduct, action.id);
    const deletedProductId = result.id
    yield put(actions.removeProduct(deletedProductId));
    yield put(actions.hideDeleteProductModal());
  }
  catch(err) {
    yield console.log('Saga - Delete Product: Error');
  }
}

export function* addNewProduct(action) {
  try {
    const newProduct = yield call(api.addNewProduct, action.product);
    yield put(actions.insertProduct(newProduct));
    yield put(actions.hideEditProductModal());
  }
  catch(err) {
    yield console.log('Saga - Add New Product: Error')
  }
}

export function* updateProduct(action) {
  try {
    const updatedProduct = yield call(api.updateProduct, action.id, action.product);
    yield put(actions.updateProductUI(updatedProduct));
    yield put(actions.hideEditProductModal());
  }
  catch(err) {
    yield console.log('Saga - Add New Product: Error')
  }
}



// Watchers
export function* watchGetProducts() {
  yield takeEvery(actions.CUSTOMERS_FETCH_REQUESTED, getAllProducts);
}

export function* watchDeleteProduct() {
  yield takeEvery(actions.CUSTOMER_DELETE_REQUESTED, deleteProduct);
}

export function* watchAddNewProduct() {
  yield takeEvery(actions.CUSTOMER_ADD_NEW_REQUESTED, addNewProduct);
}

export function* watchUpdateProduct() {
  yield takeEvery(actions.CUSTOMER_UPDATE_REQUESTED, updateProduct);
}


// Root Saga
export default function* rootSaga() {
  yield [
    fork(watchGetProducts),
    fork(watchDeleteProduct),
    fork(watchAddNewProduct),
    fork(watchUpdateProduct),
  ]
}
