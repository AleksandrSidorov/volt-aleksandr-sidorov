export const PRODUCTS_FETCH_REQUESTED = 'GET_FETCH_PRODUCTS';
export const PRODUCTS_FETCH_RECEIVED = 'PRODUCTS_FETCH_RECEIVED';
export const PRODUCTS_FETCH_FAILED = 'PRODUCTS_FETCH_FAILED';

export const PRODUCT_DELETE_REQUESTED = 'PRODUCT_DELETE_REQUESTED';
export const PRODUCT_REMOVE = 'PRODUCT_REMOVE';

export const PRODUCT_ADD_NEW_REQUESTED = 'PRODUCT_ADD_NEW_REQUESTED';
export const PRODUCT_INSERT = 'PRODUCT_INSERT';

export const PRODUCT_UPDATE_REQUESTED = 'PRODUCT_UPDATE_REQUESTED';
export const PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS';

export const PRODUCT_SHOW_MODAL_DELETE = 'PRODUCT_SHOW_MODAL_DELETE';
export const PRODUCT_HIDE_MODAL_DELETE = 'PRODUCT_HIDE_MODAL_DELETE';
export const PRODUCT_SHOW_MODAL_EDIT = 'PRODUCT_SHOW_MODAL_EDIT';
export const PRODUCT_HIDE_MODAL_EDIT = 'PRODUCT_HIDE_MODAL_EDIT';


// Products Actions
export function getAllProducts() {
  return {
    type: PRODUCTS_FETCH_REQUESTED
  }
}

export function receiveAllProducts(products) {
  return {
    type: PRODUCTS_FETCH_RECEIVED,
    products
  }
}

export function receiveAllProductsFailed(err) {
  return {
    type: PRODUCTS_FETCH_FAILED,
    err
  }
}

export function deleteProductRequest(id) {
  return {
    type: PRODUCT_DELETE_REQUESTED,
    id
  }
}

export function removeProduct(id) {
  return {
    type: PRODUCT_REMOVE,
    id
  }
}

export function addNewProductRequest(product) {
  return {
    type: PRODUCT_ADD_NEW_REQUESTED,
    product
  }
}

export function insertProduct(product) {
  return {
    type: PRODUCT_INSERT,
    product
  }
}

export function updateProductRequest(product) {
  return {
    type: PRODUCT_UPDATE_REQUESTED,
    id: product.id,
    product
  }
}

export function updateProductUI(product) {
  return {
    type: PRODUCT_UPDATE_SUCCESS,
    id: product.id,
    product
  }
}

// Modals
export function showDeleteProductModal(id) {
  return {
    type: PRODUCT_SHOW_MODAL_DELETE,
    id
  }
}

export function hideDeleteProductModal() {
  return {
    type: PRODUCT_HIDE_MODAL_DELETE,
  }
}

export function showEditProductModal(id) {
  return {
    type: PRODUCT_SHOW_MODAL_EDIT,
    id
  }
}

export function hideEditProductModal() {
  return {
    type: PRODUCT_HIDE_MODAL_EDIT,
  }
}
