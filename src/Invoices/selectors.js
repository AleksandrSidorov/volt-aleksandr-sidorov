import { createSelector } from 'reselect';

const invoicesListSelector = state => state.invoices.invoicesList;
const selectedInvoiceIdSelector = state => state.invoices.selectedInvoiceId;

export const selectedInvoiceSelector = createSelector(
  invoicesListSelector,
  selectedInvoiceIdSelector,
  (invoices, id) => {
    const result =  invoices.filter(invoice => invoice.id == id);
    return result.length > 0 ? result[0] : null;
  }
)
