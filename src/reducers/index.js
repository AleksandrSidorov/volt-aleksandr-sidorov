import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  state: (state = { test: "test" }) => state
})

export default rootReducer;
