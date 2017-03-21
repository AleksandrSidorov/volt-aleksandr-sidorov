export const INVOICES_FETCH_REQUESTED = 'GET_FETCH_INVOICES';
export const INVOICES_FETCH_RECEIVED = 'INVOICES_FETCH_RECEIVED';
export const INVOICES_FETCH_FAILED = 'INVOICES_FETCH_FAILED';

export const INVOICE_DELETE_REQUESTED = 'INVOICE_DELETE_REQUESTED';
export const INVOICE_REMOVE = 'INVOICE_REMOVE';

export const INVOICE_ADD_NEW_REQUESTED = 'INVOICE_ADD_NEW_REQUESTED';
export const INVOICE_INSERT = 'INVOICE_INSERT';

export const INVOICE_UPDATE_REQUESTED = 'INVOICE_UPDATE_REQUESTED';
export const INVOICE_UPDATE_SUCCESS = 'INVOICE_UPDATE_SUCCESS';

export const INVOICE_SET_SELECTED_ID = 'INVOICE_SET_SELECTED_ID';
export const INVOICE_CLEAR_SELECTED_ID = 'INVOICE_CLEAR_SELECTED_ID';

export const INVOICE_SHOW_MODAL_DELETE = 'INVOICE_SHOW_MODAL_DELETE';
export const INVOICE_HIDE_MODAL_DELETE = 'INVOICE_HIDE_MODAL_DELETE';
export const INVOICE_SHOW_MODAL_EDIT = 'INVOICE_SHOW_MODAL_EDIT';
export const INVOICE_HIDE_MODAL_EDIT = 'INVOICE_HIDE_MODAL_EDIT';
// Invoice items
export const INVOICEITEMS_FETCH_REQUESTED = 'INVOICEITEMS_FETCH_REQUESTED';
export const INVOICEITEMS_FETCH_RECEIVED = 'INVOICEITEMS_FETCH_RECEIVED';
export const INVOICEITEMS_FETCH_FAILED = 'INVOICEITEMS_FETCH_FAILED';

// Invoices Actions
export function getAllInvoices() {
  return {
    type: INVOICES_FETCH_REQUESTED
  }
}

export function receiveAllInvoices(invoices) {
  return {
    type: INVOICES_FETCH_RECEIVED,
    invoices
  }
}

export function receiveAllInvoicesFailed(err) {
  return {
    type: INVOICES_FETCH_FAILED,
    err
  }
}

export function deleteInvoiceRequest(id) {
  return {
    type: INVOICE_DELETE_REQUESTED,
    id
  }
}

export function removeInvoice(id) {
  return {
    type: INVOICE_REMOVE,
    id
  }
}

export function addNewInvoiceRequest(invoice) {
  return {
    type: INVOICE_ADD_NEW_REQUESTED,
    invoice
  }
}

export function insertInvoice(invoice) {
  return {
    type: INVOICE_INSERT,
    invoice
  }
}

export function updateInvoiceRequest(invoice) {
  return {
    type: INVOICE_UPDATE_REQUESTED,
    id: invoice.id,
    invoice
  }
}

export function updateInvoiceUI(invoice) {
  return {
    type: INVOICE_UPDATE_SUCCESS,
    id: invoice.id,
    invoice
  }
}

export function setSelectedInvoiceId(id) {
  return {
    type: INVOICE_SET_SELECTED_ID,
    id
  }
}

export function clearSelectedInvoiceId() {
  return {
    type: INVOICE_CLEAR_SELECTED_ID,
  }
}

// Modals
export function showDeleteInvoiceModal(id) {
  return {
    type: INVOICE_SHOW_MODAL_DELETE,
    id
  }
}

export function hideDeleteInvoiceModal() {
  return {
    type: INVOICE_HIDE_MODAL_DELETE,
  }
}

export function showEditInvoiceModal(id) {
  return {
    type: INVOICE_SHOW_MODAL_EDIT,
    id
  }
}

export function hideEditInvoiceModal() {
  return {
    type: INVOICE_HIDE_MODAL_EDIT,
  }
}


// Invoice Item actions
export function getAllInvoiceItems(id) {
  console.log('II requested ', id);
  return {
    type: INVOICEITEMS_FETCH_REQUESTED,
    id
  }
}

export function receiveAllInvoiceItems(invoiceItems) {
  console.log('II received ', invoiceItems);
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
