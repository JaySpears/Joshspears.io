import { combineReducers } from 'redux';
import isExampleReducer from './reducer.example';

// Combine all reducers.
const reducers = combineReducers({
  isExampleReducer
});

// Export root reducer for state initialization.
export default reducers;
