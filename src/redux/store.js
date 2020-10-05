import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
