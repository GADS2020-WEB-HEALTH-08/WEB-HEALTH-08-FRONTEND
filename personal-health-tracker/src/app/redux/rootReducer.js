import { combineReducers } from 'redux';
import commonReducer from './common/common.slice';

const rootReducer = combineReducers({
  common: commonReducer
});

export default rootReducer;
