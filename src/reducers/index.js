import { combineReducers } from 'redux';
import FACN2Reducer from './FACN2.reducer';

const rootReducers = combineReducers({
  FACN2: FACN2Reducer
});

export default rootReducers;
