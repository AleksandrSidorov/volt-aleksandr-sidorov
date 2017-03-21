import { combineReducers } from 'redux';
import { default as customers } from './Customers/reducer';
import { default as products } from './Products/reducer';
import { default as invoices } from './Invoices/reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  customers,
  products,
  invoices,
  form: formReducer,
})

export default rootReducer;
