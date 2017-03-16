import { combineReducers } from 'redux';
import { default as customers } from './customers';

const rootReducer = combineReducers({
  customers
})

export default rootReducer;
