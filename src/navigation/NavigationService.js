import {NavigationActions, StackActions} from 'react-navigation';
import {DrawerActions} from 'react-navigation-drawer';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function toggle(routeName, params) {
  _navigator.dispatch(DrawerActions.toggleDrawer());
}

function closeDrawer() {
  _navigator.dispatch(DrawerActions.closeDrawer());
}

function replace(routeName, params) {
  _navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    }),
  );
}

function goBack(routeName, params) {
  _navigator.dispatch(
    NavigationActions.back({
      routeName,
      params,
    }),
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  replace,
  goBack,
  toggle,
  closeDrawer,
  setTopLevelNavigator,
};
