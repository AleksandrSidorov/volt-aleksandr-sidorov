import { take, put, call, fork, select, takeEvery } from 'redux-saga/effects';
import api from './api';
import * as actions from '../actions';

export function* getAllCustomers() {
  const customers = yield call(api.getCustomers);
  yield put(actions.receiveCustomers(customers));
}

export function* watchGetCustomers() {
  yield takeEvery(actions.GET_ALL_CUSTOMERS, getAllCustomers);
}

export default function* rootSaga() {
  yield [
    fork(watchGetCustomers),
  ]
}
