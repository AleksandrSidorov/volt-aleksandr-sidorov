export const CUSTOMERS_FETCH_REQUESTED = 'GET_FETCH_CUSTOMERS';
export const CUSTOMERS_FETCH_RECEIVED = 'CUSTOMERS_FETCH_RECEIVED';
export const CUSTOMERS_FETCH_FAILED = 'CUSTOMERS_FETCH_FAILED';

export const CUSTOMER_DELETE_REQUESTED = 'CUSTOMER_DELETE_REQUESTED';
export const CUSTOMER_REMOVE = 'CUSTOMER_REMOVE';

export const CUSTOMER_ADD_NEW_REQUESTED = 'CUSTOMER_ADD_NEW_REQUESTED';
export const CUSTOMER_INSERT = 'CUSTOMER_INSERT';

export const CUSTOMER_UPDATE_REQUESTED = 'CUSTOMER_UPDATE_REQUESTED';
export const CUSTOMER_UPDATE_SUCCESS = 'CUSTOMER_UPDATE_SUCCESS';

export const CUSTOMER_SHOW_MODAL_DELETE = 'CUSTOMER_SHOW_MODAL_DELETE';
export const CUSTOMER_HIDE_MODAL_DELETE = 'CUSTOMER_HIDE_MODAL_DELETE';
export const CUSTOMER_SHOW_MODAL_EDIT = 'CUSTOMER_SHOW_MODAL_EDIT';
export const CUSTOMER_HIDE_MODAL_EDIT = 'CUSTOMER_HIDE_MODAL_EDIT';


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

export function addNewCustomerRequest(customer) {
  return {
    type: CUSTOMER_ADD_NEW_REQUESTED,
    customer
  }
}

export function insertCustomer(customer) {
  return {
    type: CUSTOMER_INSERT,
    customer
  }
}

export function updateCustomerRequest(customer) {
  return {
    type: CUSTOMER_UPDATE_REQUESTED,
    id: customer.id,
    customer
  }
}

export function updateCustomerUI(customer) {
  return {
    type: CUSTOMER_UPDATE_SUCCESS,
    id: customer.id,
    customer
  }
}

// Modals
export function showDeleteCustomerModal(id) {
  return {
    type: CUSTOMER_SHOW_MODAL_DELETE,
    id
  }
}

export function hideDeleteCustomerModal() {
  return {
    type: CUSTOMER_HIDE_MODAL_DELETE,
  }
}

export function showEditCustomerModal(id) {
  return {
    type: CUSTOMER_SHOW_MODAL_EDIT,
    id
  }
}

export function hideEditCustomerModal() {
  return {
    type: CUSTOMER_HIDE_MODAL_EDIT,
  }
}
