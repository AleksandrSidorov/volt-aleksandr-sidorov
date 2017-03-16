export const CUSTOMERS_FETCH_REQUESTED = 'GET_ALL_CUSTOMERS';
export const CUSTOMERS_FETCH_RECEIVED = 'CUSTOMERS_FETCH_RECEIVED';
export const CUSTOMERS_FETCH_FAILED = 'CUSTOMERS_FETCH_FAILED';

export function getAllCustomers() {
  return {
    type: CUSTOMERS_FETCH_REQUESTED
  }
}

export function receiveAllCustomers(customers) {
  return {
    type: CUSTOMERS_FETCH_RECEIVED,
    customers
  }
}

export function receiveAllCustomersFailed(err) {
  return {
    type: CUSTOMERS_FETCH_FAILED,
    err
  }
}
