import {combineReducers} from 'redux';

import appReducer from './app/appReducer';
import dashboardReducer from './reducers/dashboardReducer';

export default combineReducers({
  appReducer,
  dashboardReducer,
});
