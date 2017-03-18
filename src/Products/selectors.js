import { createSelector } from 'reselect';

const productsListSelector = state => state.products.productsList;
const selectedProductIdSelector = state => state.products.selectedProductId;

export const selectedProductSelector = createSelector(
  productsListSelector,
  selectedProductIdSelector,
  (products, id) => {
    const result =  products.filter(product => product.id == id);
    return result.length > 0 ? result[0] : null;
  }
)
