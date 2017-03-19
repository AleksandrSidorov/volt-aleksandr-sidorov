import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:8000/api';

// REST API Calls
function getItems(component) {
  return fetch(`${baseUrl}/${component}`)
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

function addNewItem(item, component) {
  return fetch(`${baseUrl}/${component}`,
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
