import Constant from '../constants';
import {createReducer} from '../index';

const initialState = {
  loading: false,
  loadingMessage: '',
  isConnected: true,
};

export default createReducer(initialState, {
  [Constant.REQUEST_STARTED]: (state, payload) =>
    Object.assign({}, state, {
      loading: true,
      loadingMessage: payload,
    }),

  [Constant.REQUEST_COMPLETED]: state =>
    Object.assign({}, state, {
      loading: false,
      loadingMessage: '',
    }),

  [Constant.REQUEST_FAIL]: state =>
    Object.assign({}, state, {
      loading: false,
      loadingMessage: '',
    }),

  [Constant.NET_STATE_CHANGED]: (state, payload) =>
    Object.assign({}, state, {
      isConnected: payload,
    }),
});
