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
  getProducts
};
