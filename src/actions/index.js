export const CUSTOMERS_FETCH_REQUESTED = 'GET_FETCH_CUSTOMERS';
export const CUSTOMERS_FETCH_RECEIVED = 'CUSTOMERS_FETCH_RECEIVED';
export const CUSTOMERS_FETCH_FAILED = 'CUSTOMERS_FETCH_FAILED';
export const CUSTOMER_DELETE_REQUESTED = 'CUSTOMER_DELETE_REQUESTED';


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

export function deleteCustomerRequest(id) {
  return {
    type: CUSTOMER_DELETE_REQUESTED,
    id
  }
}
