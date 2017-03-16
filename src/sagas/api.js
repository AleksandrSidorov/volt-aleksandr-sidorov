import fetch from 'isomorphic-fetch';

const baseUrl = 'http://localhost:8000/api';

// Customers RESA API Calls
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
  console.log('api id', id);
  return fetch(`${baseUrl}/customers/${id}`, { method: 'DELETE' })
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Network response was not ok.', res.status);
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
  getProducts
};
