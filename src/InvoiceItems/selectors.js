import { createSelector } from 'reselect';

const invoiceItemsListSelector = state => state.invoiceItems.invoiceItemsList;
const selectedInvoiceItemIdSelector = state => state.invoiceItems.selectedInvoiceItemId;

export const selectedInvoiceItemSelector = createSelector(
  invoiceItemsListSelector,
  selectedInvoiceItemIdSelector,
  (invoiceItems, id) => {
    const result =  invoiceItems.filter(invoiceItem => invoiceItem.id == id);
    return result.length > 0 ? result[0] : null;
  }
)
