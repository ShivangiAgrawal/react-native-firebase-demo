import {createReducer} from '../index';
import Constants from '../constants';

const initialState = {
  dashboardData: [],
  dashboardError: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.DASHBOARD_SUCCESS:
      console.log('getFilesReducer payload: DASHBOARD_SUCCESS');
      return {
        dashboardData: action.payload,
        dashboardError: null,
        // isLoading: false
      };
    case Constants.DASHBOARD_FAILED:
      console.log('getFilesReducer payload: DASHBOARD_FAILED');
      return {
        dashboardData: [],
        dashboardError: action.payload,
      };
    case Constants.DASHBOARD_PENDING:
      console.log('getFilesReducer payload: DASHBOARD_PENDING');
      return {
        dashboardData: [],
        dashboardError: null,
      };
    case Constants.RESET_STORE:
      console.log('getFilesReducer payload: RESET_STORE');
      return {
        dashboardData: [],
        dashboardError: null,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
