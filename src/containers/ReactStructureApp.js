import React from 'react';
import AppContainer from './AppContainer';
import {Provider} from 'react-redux';
import configureStore from '../redux/store';

export default function ReactStructureApp() {
  return (
    <Provider store={configureStore()}>
      <AppContainer />
    </Provider>
  );
}
