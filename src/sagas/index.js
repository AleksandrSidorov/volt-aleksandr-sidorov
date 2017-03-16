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
  }
  catch(err) {
    yield console.log('Delete Error');
  }
}

// Watchers
export function* watchGetCustomers() {
  yield takeEvery(actions.CUSTOMERS_FETCH_REQUESTED, getAllCustomers);
}

export function* watchDeleteCustomer() {
  yield takeEvery(actions.CUSTOMER_DELETE_REQUESTED, deleteCustomer)
}

export default function* rootSaga() {
  yield [
    fork(watchGetCustomers),
    fork(watchDeleteCustomer),
  ]
}
