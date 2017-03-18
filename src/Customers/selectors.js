import { createSelector } from 'reselect';

const customersListSelector = state => state.customers.customersList;
const selectedCustomerIdSelector = state => state.customers.selectedCustomerId;

export const selectedCustomerSelector = createSelector(
  customersListSelector,
  selectedCustomerIdSelector,
  (customers, id) => {
    const result =  customers.filter(customer => customer.id == id);
    return result.length > 0 ? result[0] : null;
  }
)
