import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lightGray
  },

  subContainer1: {
    flex: 0.7,
    alignItems: 'center'
  },

  subContainer2: {
    flex: 0.3,
    alignItems: 'center'
  },

  viewContainer: {
    width: '80%',
    height: 50,
    marginBottom: 40
  },

  textLabel: {
    fontFamily: 'Rubik-Regular',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 2,
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 0,
    color: colors.black
  },

  textLabel: {
    fontFamily: 'Rubik-Regular',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 2,
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 0,
    color: colors.slateGrey
  },
  textProfile: {
    fontFamily: 'Rubik-Regular',
    alignSelf: 'flex-start',
    marginTop: 10,
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 0,
    color: colors.black
  },
  profileContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40
    // marginTop: 40,
    // marginBottom: 40
  },

  viewTextInputContainer: {
    borderWidth: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.slateGrey,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textInput: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    color: colors.slateGrey,
    paddingLeft: 10,
    fontSize: 14,
    fontFamily: 'Rubik-Regular'
  },

  viewPrimaryBtnContainer: {
    height: 50,
    textAlignVertical: 'center',
    marginTop: 50,
    marginBottom: 36,
    width: '80%',
    borderRadius: 12,
    backgroundColor: colors.shamrock,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textPrimaryBtn: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    lineHeight: 19,
    letterSpacing: 0,
    color: colors.white,
    fontFamily: 'Rubik-Regular'
  },

  viewSecondaryBtnContainer: {
    height: 50,
    textAlignVertical: 'center',
    marginTop: 25,
    // marginBottom: 25,
    width: '100%',
    borderRadius: 12,
    backgroundColor: colors.white,
    borderColor: colors.shamrock,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSecondaryBtn: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    lineHeight: 19,
    letterSpacing: 0,
    color: colors.shamrock,
    fontFamily: 'Rubik-Regular'
  },

  headerContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: colors.shamrock,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  tabHeaderContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: colors.cyan_blue,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerLeftImage: {
    alignSelf: 'flex-start',
    marginStart: 10
  },

  headerRightImage: {
    alignSelf: 'flex-end',
    marginEnd: 10
  },

  headerTextStyle: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
    fontFamily: 'Rubik-Regular',
    fontWeight: '700'
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.lightGray,
    padding: 20
  },
  drawerHeaderImage: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2
  },
  drawerHeaderText: {
    margin: 10,
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    color: colors.white
  },
  drawerHeaderSeparator: {
    marginBottom: 20,
    height: 1,
    width: '100%',
    backgroundColor: colors.lightGray,
    paddingRight: 20
  },
  drawerContent: {
    padding: 10,
    marginStart: 10,
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    color: colors.white,
    textAlignVertical: 'center'
  },
  drawerMenuItem: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row'
  },
  curvedView: {
    backgroundColor: colors.cardWhite,
    borderColor: colors.cardWhite,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: '100%',
    flexDirection: 'column'
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  topModal: {
    justifyContent: 'center',
    margin: 0
  },
  textError: {
    fontFamily: 'Rubik-Regular',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0,
    color: colors.red
  }
});
