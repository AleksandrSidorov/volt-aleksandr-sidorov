import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import api from './api';
import * as actions from '../actions';


export function* getAllCustomers() {
  try {
    const customers = yield call(api.getCustomers);
    yield put(actions.receiveAllCustomers(customers));
  }
  catch (err) {
    yield put(actions.receiveAllCustomersFailed(err));
  }
}

export function* deleteCustomer(action) {
  try {
    const result = yield call(api.deleteCustomer, action.id);
    const deletedCustomerId = result.id
    yield put(actions.removeCustomer(deletedCustomerId));
    yield put(actions.hideDeleteCustomerModal());
  }
  catch(err) {
    yield console.log('Saga - Delete Customer: Error');
  }
}

export function* addNewCustomer(action) {
  try {
    const newCustomer = yield call(api.addNewCustomer, action.customer);
    yield put(actions.insertCustomer(newCustomer));
    yield put(actions.hideEditCustomerModal());
  }
  catch(err) {
    yield console.log('Saga - Add New Customer: Error')
  }
}

export function* updateCustomer(action) {
  try {
    const updatedCustomer = yield call(api.updateCustomer, action.id, action.customer);
    yield put(actions.updateCustomerUI(updatedCustomer));
    yield put(actions.hideEditCustomerModal());
  }
  catch(err) {
    yield console.log('Saga - Add New Customer: Error')
  }
}



// Watchers
export function* watchGetCustomers() {
  yield takeEvery(actions.CUSTOMERS_FETCH_REQUESTED, getAllCustomers);
}

export function* watchDeleteCustomer() {
  yield takeEvery(actions.CUSTOMER_DELETE_REQUESTED, deleteCustomer);
}

export function* watchAddNewCustomer() {
  yield takeEvery(actions.CUSTOMER_ADD_NEW_REQUESTED, addNewCustomer);
}

export function* watchUpdateCustomer() {
  yield takeEvery(actions.CUSTOMER_UPDATE_REQUESTED, updateCustomer);
}


// Root Saga
export default function* rootSaga() {
  yield [
    fork(watchGetCustomers),
    fork(watchDeleteCustomer),
    fork(watchAddNewCustomer),
    fork(watchUpdateCustomer),
  ]
}
