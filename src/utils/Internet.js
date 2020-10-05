import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import strings from '../utils/strings';
import colors from '../utils/colors';

const Internet = props => (
  <SafeAreaView style={styles.internetSafeAreaViewContainer}>
    <View style={styles.internetContainer}>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      {props.isInternetWarningShow ? (
        <View style={styles.internetViewWarning}>
          <Text style={styles.internetTvWarning}>
            Please turn ON your data or wifi
          </Text>
        </View>
      ) : (
        <View />
      )}

      <View style={styles.internetViewTvImg}>
        <Text style={styles.inenernetTvMsg}>
          {strings.noInternetConnection}
        </Text>
        <Text style={styles.internetTvMsgIn}>
          {strings.pleaseCheckYourInnternet}
        </Text>
        <TouchableOpacity
          style={styles.inernetBtnRequest}
          onPress={props.onTryAgainClick}>
          <Text style={styles.internetTxtRequest}>{strings.tryAgain}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  internetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  internetViewWarning: {
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  internetTvWarning: {
    color: colors.white,
    fontSize: 14,
    padding: 5,
    paddingTop: 3,
    paddingBottom: 3,
    fontFamily: 'Rubik-Regular',
  },
  inenernetTvMsg: {
    color: colors.shamrock,
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  inernetBtnRequest: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.shamrock,
    color: colors.white,
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 4,
  },
  internetViewTvImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  internetTxtRequest: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Rubik-Regular',
  },
  internetSafeAreaViewContainer: {
    flex: 1,
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

export default Internet;
