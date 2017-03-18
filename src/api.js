import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:8000/api';

// Customers REST API Calls
function getCustomers() {
  return fetch(`${baseUrl}/customers`)
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

function deleteCustomer(id) {
  return fetch(`${baseUrl}/customers/${id}`, { method: 'DELETE' })
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

function updateCustomer(id, customer) {
  return fetch(`${baseUrl}/customers/${id}`,
    {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(customer)
    })
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Update Customer: Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

function addNewCustomer(customer) {
  return fetch(`${baseUrl}/customers`,
    {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(customer)
    })
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Add New Customer: Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

//Products REST API Calls
function getProducts() {
  return fetch(`${baseUrl}/products`)
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

// Invoices

// InvoiceItems

export default {
  getCustomers,
  deleteCustomer,
  getProducts,
  addNewCustomer,
  updateCustomer,
};
