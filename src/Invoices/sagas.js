import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import api from '../api';
import * as actions from './actions';


export function* getAllInvoices() {
  try {
    const invoices = yield call(api.getItems, 'invoices');
    yield put(actions.receiveAllInvoices(invoices));
  }
  catch (err) {
    yield put(actions.receiveAllInvoicesFailed(err));
  }
}

export function* deleteInvoice(action) {
  try {
    const result = yield call(api.deleteItem, action.id, 'invoices');
    const deletedInvoiceId = result.id
    yield put(actions.removeInvoice(deletedInvoiceId));
    yield put(actions.hideDeleteInvoiceModal());
  }
  catch(err) {
    yield console.log('Saga - Delete Invoice: Error');
  }
}

export function* addNewInvoice(action) {
  try {
    const newInvoice = yield call(api.addNewItem, action.invoice, 'invoices');
    yield put(actions.insertInvoice(newInvoice));
    yield put(actions.hideEditInvoiceModal());
  }
  catch(err) {
    yield console.log('Saga - Add New Invoice: Error')
  }
}

export function* updateInvoice(action) {
  try {
    const updatedInvoice = yield call(api.updateItem, action.id, action.invoice, 'invoices');
    yield put(actions.updateInvoiceUI(updatedInvoice));
    yield put(actions.hideEditInvoiceModal());
  }
  catch(err) {
    yield console.log('Saga - Add New Invoice: Error')
  }
}


export function* getAllInvoiceItems(action) {
  try {
    const invoices = yield call(api.getItems, 'invoices', action.id);
    yield put(actions.receiveAllInvoiceItems(invoiceItems));
  }
  catch (err) {
    yield put(actions.receiveAllInvoiceItemsFailed(err));
  }
}


// Watchers
export function* watchGetInvoices() {
  yield takeEvery(actions.INVOICES_FETCH_REQUESTED, getAllInvoices);
}

export function* watchDeleteInvoice() {
  yield takeEvery(actions.INVOICE_DELETE_REQUESTED, deleteInvoice);
}

export function* watchAddNewInvoice() {
  yield takeEvery(actions.INVOICE_ADD_NEW_REQUESTED, addNewInvoice);
}

export function* watchUpdateInvoice() {
  yield takeEvery(actions.INVOICE_UPDATE_REQUESTED, updateInvoice);
}

export function* watchGetInvoiceItems() {
  yield takeEvery(actions.INVOICEITEMS_FETCH_REQUESTED, getAllInvoiceItems);
}


// Invoices Root Saga
export default function* invoicesSaga() {
  yield [
    fork(watchGetInvoices),
    fork(watchDeleteInvoice),
    fork(watchAddNewInvoice),
    fork(watchUpdateInvoice),
    fork(watchGetInvoiceItems),
  ]
}
