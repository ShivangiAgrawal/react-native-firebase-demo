import Constants from '../constants';
import axios from 'axios';
import api from '../api';
import {requestStarted, requestCompleted} from '../app/appActions';

export const dashboardAction = props => (dispatch, getState) => {
  dispatch(dashboardDataPending());
  dispatch(requestStarted());

  axios
    .get(api.dashboardAPI)
    .then(function(response) {
      console.log('response::::::: ' + response.data);
      dispatch(dashboardDataSuccess(response.data));
      dispatch(requestCompleted());
    })
    .catch(function(error) {
      dispatch(dashboardDataFailure(error));
      dispatch(requestCompleted());
    });
};

const dashboardDataSuccess = data => dispatch => {
  dispatch({
    type: Constants.DASHBOARD_SUCCESS,
    payload: data,
  });
};
const dashboardDataFailure = error => dispatch => {
  dispatch({
    type: Constants.DASHBOARD_FAILED,
    payload: error,
  });
};
const dashboardDataPending = () => dispatch => {
  dispatch({
    type: Constants.DASHBOARD_PENDING,
  });
};
