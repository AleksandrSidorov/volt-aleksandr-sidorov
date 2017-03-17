export const CUSTOMERS_FETCH_REQUESTED = 'GET_FETCH_CUSTOMERS';
export const CUSTOMERS_FETCH_RECEIVED = 'CUSTOMERS_FETCH_RECEIVED';
export const CUSTOMERS_FETCH_FAILED = 'CUSTOMERS_FETCH_FAILED';
export const CUSTOMER_DELETE_REQUESTED = 'CUSTOMER_DELETE_REQUESTED';
export const CUSTOMER_REMOVE = 'CUSTOMER_REMOVE';
export const CUSTOMER_SHOW_MODAL_DELETE = 'CUSTOMER_SHOW_MODAL_DELETE';
export const CUSTOMER_HIDE_MODAL_DELETE = 'CUSTOMER_HIDE_MODAL_DELETE';

// Customers Actions
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

export function removeCustomer(id) {
  return {
    type: CUSTOMER_REMOVE,
    id
  }
}

export function showDeleteCustomerModal(id) {
  return {
    type: CUSTOMER_SHOW_MODAL_DELETE,
    id
  }
}

export function hideDeleteCustomerModal() {
  console.log('action: hide modal');
  return {
    type: CUSTOMER_HIDE_MODAL_DELETE,
  }
}
