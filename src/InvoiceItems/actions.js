export const INVOICEITEMS_FETCH_REQUESTED = 'GET_FETCH_INVOICEITEMS';
export const INVOICEITEMS_FETCH_RECEIVED = 'INVOICEITEMS_FETCH_RECEIVED';
export const INVOICEITEMS_FETCH_FAILED = 'INVOICEITEMS_FETCH_FAILED';

export const INVOICEITEM_DELETE_REQUESTED = 'INVOICEITEM_DELETE_REQUESTED';
export const INVOICEITEM_REMOVE = 'INVOICEITEM_REMOVE';

export const INVOICEITEM_ADD_NEW_REQUESTED = 'INVOICEITEM_ADD_NEW_REQUESTED';
export const INVOICEITEM_INSERT = 'INVOICEITEM_INSERT';

export const INVOICEITEM_UPDATE_REQUESTED = 'INVOICEITEM_UPDATE_REQUESTED';
export const INVOICEITEM_UPDATE_SUCCESS = 'INVOICEITEM_UPDATE_SUCCESS';

export const INVOICEITEM_SHOW_MODAL_DELETE = 'INVOICEITEM_SHOW_MODAL_DELETE';
export const INVOICEITEM_HIDE_MODAL_DELETE = 'INVOICEITEM_HIDE_MODAL_DELETE';
export const INVOICEITEM_SHOW_MODAL_EDIT = 'INVOICEITEM_SHOW_MODAL_EDIT';
export const INVOICEITEM_HIDE_MODAL_EDIT = 'INVOICEITEM_HIDE_MODAL_EDIT';


// InvoiceItems Actions
export function getAllInvoiceItems() {
  return {
    type: INVOICEITEMS_FETCH_REQUESTED
  }
}

export function receiveAllInvoiceItems(invoiceItems) {
  return {
    type: INVOICEITEMS_FETCH_RECEIVED,
    invoiceItems
  }
}

export function receiveAllInvoiceItemsFailed(err) {
  return {
    type: INVOICEITEMS_FETCH_FAILED,
    err
  }
}

export function deleteInvoiceItemRequest(id) {
  return {
    type: INVOICEITEM_DELETE_REQUESTED,
    id
  }
}

export function removeInvoiceItem(id) {
  return {
    type: INVOICEITEM_REMOVE,
    id
  }
}

export function addNewInvoiceItemRequest(invoiceItem) {
  return {
    type: INVOICEITEM_ADD_NEW_REQUESTED,
    invoiceItem
  }
}

export function insertInvoiceItem(invoiceItem) {
  return {
    type: INVOICEITEM_INSERT,
    invoiceItem
  }
}

export function updateInvoiceItemRequest(invoiceItem) {
  return {
    type: INVOICEITEM_UPDATE_REQUESTED,
    id: invoiceItem.id,
    invoiceItem
  }
}

export function updateInvoiceItemUI(invoiceItem) {
  return {
    type: INVOICEITEM_UPDATE_SUCCESS,
    id: invoiceItem.id,
    invoiceItem
  }
}

// Modals
export function showDeleteInvoiceItemModal(id) {
  return {
    type: INVOICEITEM_SHOW_MODAL_DELETE,
    id
  }
}

export function hideDeleteInvoiceItemModal() {
  return {
    type: INVOICEITEM_HIDE_MODAL_DELETE,
  }
}

export function showEditInvoiceItemModal(id) {
  return {
    type: INVOICEITEM_SHOW_MODAL_EDIT,
    id
  }
}

export function hideEditInvoiceItemModal() {
  return {
    type: INVOICEITEM_HIDE_MODAL_EDIT,
  }
}
