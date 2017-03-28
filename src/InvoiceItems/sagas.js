import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import api from '../api';
import * as actions from './actions';


export function* getInvoiceItems(action) {
  try {
    const invoiceItems = yield call(api.getItems, 'invoices', action.id);
    yield put(actions.receiveInvoiceItems(invoiceItems));
  }
  catch (err) {
    yield put(actions.receiveInvoiceItemsFailed(err));
  }
}

export function* deleteInvoiceItem(action) {
  try {
    const result = yield call(api.deleteItem, action.id, 'invoiceItems');
    const deletedInvoiceItemId = result.id
    yield put(actions.removeInvoiceItem(deletedInvoiceItemId));
    yield put(actions.hideDeleteInvoiceItemModal());
  }
  catch(err) {
    yield console.log('Saga - Delete InvoiceItem: Error');
  }
}

export function* addNewInvoiceItem(action) {
  try {
    const newInvoiceItem = yield call(api.addNewItem, action.invoiceItem, 'invoiceItems');
    yield put(actions.insertInvoiceItem(newInvoiceItem));
    yield put(actions.hideEditInvoiceItemModal());
  }
  catch(err) {
    yield console.log('Saga - Add New InvoiceItem: Error')
  }
}

export function* updateInvoiceItem(action) {
  try {
    const updatedInvoiceItem = yield call(api.updateItem, action.id, action.invoiceItem, 'invoiceItems');
    yield put(actions.updateInvoiceItemUI(updatedInvoiceItem));
    yield put(actions.hideEditInvoiceItemModal());
  }
  catch(err) {
    yield console.log('Saga - Add New InvoiceItem: Error')
  }
}



// Watchers
export function* watchGetInvoiceItems() {
  yield takeEvery(actions.INVOICEITEMS_FETCH_REQUESTED, getInvoiceItems);
}

export function* watchDeleteInvoiceItem() {
  yield takeEvery(actions.INVOICEITEM_DELETE_REQUESTED, deleteInvoiceItem);
}

export function* watchAddNewInvoiceItem() {
  yield takeEvery(actions.INVOICEITEM_ADD_NEW_REQUESTED, addNewInvoiceItem);
}

export function* watchUpdateInvoiceItem() {
  yield takeEvery(actions.INVOICEITEM_UPDATE_REQUESTED, updateInvoiceItem);
}

// InvoiceItems Root Saga
export default function* invoiceItemsSaga() {
  yield [
    fork(watchGetInvoiceItems),
    fork(watchDeleteInvoiceItem),
    fork(watchAddNewInvoiceItem),
    fork(watchUpdateInvoiceItem),
  ]
}
