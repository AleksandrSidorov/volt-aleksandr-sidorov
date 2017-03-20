import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import api from '../api';
import * as actions from './actions';


export function* getAllProducts() {
  try {
    const products = yield call(api.getItems, 'products');
    yield put(actions.receiveAllProducts(products));
  }
  catch (err) {
    yield put(actions.receiveAllProductsFailed(err));
  }
}

export function* deleteProduct(action) {
  try {
    const result = yield call(api.deleteItem, action.id, 'products');
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
    const newProduct = yield call(api.addNewItem, action.product, 'products');
    console.log(newProduct);
    yield put(actions.insertProduct(newProduct));
    yield put(actions.hideEditProductModal());
  }
  catch(err) {
    yield console.log('Saga - Add New Product: Error')
  }
}

export function* updateProduct(action) {
  try {
    console.log('before yield', action.product);
    const updatedProduct = yield call(api.updateItem, action.id, action.product, 'products');
    console.log(updatedProduct);
    yield put(actions.updateProductUI(updatedProduct));
    yield put(actions.hideEditProductModal());
  }
  catch(err) {
    yield console.log('Saga - Add New Product: Error')
  }
}



// Watchers
export function* watchGetProducts() {
  yield takeEvery(actions.PRODUCTS_FETCH_REQUESTED, getAllProducts);
}

export function* watchDeleteProduct() {
  yield takeEvery(actions.PRODUCT_DELETE_REQUESTED, deleteProduct);
}

export function* watchAddNewProduct() {
  yield takeEvery(actions.PRODUCT_ADD_NEW_REQUESTED, addNewProduct);
}

export function* watchUpdateProduct() {
  yield takeEvery(actions.PRODUCT_UPDATE_REQUESTED, updateProduct);
}


// Products Root Saga
export default function* productsSaga() {
  yield [
    fork(watchGetProducts),
    fork(watchDeleteProduct),
    fork(watchAddNewProduct),
    fork(watchUpdateProduct),
  ]
}
