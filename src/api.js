import fetch from 'isomorphic-fetch';

const baseUrl = `/api`;

// REST API Calls
function getItems(component, invoiceId=false) {
  let invoiceUrl = '';
  if (invoiceId !== false) {
    invoiceUrl = `/${invoiceId}/invoices`;
  }
  return fetch(`${baseUrl}/${component}${invoiceUrl}`)
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

function deleteItem(id, component) {
  return fetch(`${baseUrl}/${component}/${id}`, { method: 'DELETE' })
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

function updateItem(id, item, component) {
  return fetch(`${baseUrl}/${component}/${id}`,
    {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(item)
    })
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Update Item: Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

function addNewItem(item, component, invoiceId=false) {
  let invoiceUrl = '';
  if (invoiceId !== false) {
    invoiceUrl=`/${invoiceId}/items`
  }
  return fetch(`${baseUrl}/${component}${invoiceUrl}`,
    {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(item)
    })
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Add New Item: Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

export default {
  getItems,
  deleteItem,
  addNewItem,
  updateItem,
};
