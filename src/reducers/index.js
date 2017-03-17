import { combineReducers } from 'redux';
import { default as customers } from './customers';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  customers,
  formReducer,
})

export default rootReducer;
