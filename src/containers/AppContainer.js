/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Loader from '../utils/Loader';
import AppNavigatorContainer from '../navigation/AppNavigator';
import NetInfo from '@react-native-community/netinfo';
import Internet from '../utils/Internet';
import NavigationService from '../navigation/NavigationService';
import {connect} from 'react-redux';
import * as appActionCreator from '../redux/app/appActions';
import {bindActionCreators} from 'redux';

function AppContainer(props) {
  const [isInternetWarningShow, setIsInternetWarningShow] = useState(false);

  useEffect(() => {
    unsubscribe();
  }, []);

  const unsubscribe = NetInfo.addEventListener(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
    props.appActions.isConnectionStateChanged(state.isConnected);
  });

  console.log('this.props.loading::::::::::::: ' + props.loading);
  return (
    <View style={{flex: 1}}>
      <AppNavigatorContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      {props.loading ? <Loader /> : <View />}
      {!props.isConnected && props.isConnected !== undefined ? (
        <Internet
          // onTryAgainClick={onTryAgainClick}
          isInternetWarningShow={isInternetWarningShow}
        />
      ) : (
        <View />
      )}
    </View>
  );
}

const mapStateToProps = state => ({
  loading: state.appReducer.loading,
  isConnected: state.appReducer.isConnected,
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActionCreator, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
