import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';
import App from '../../App';

const AppStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AppNavigator = createSwitchNavigator({
  Splash: {
    screen: Splash,
  },
  Signup: {
    screen: Signup,
  },
  Login: {
    screen: Login,
  },
  App: AppStack,
});

const AppNavigatorContainer = createAppContainer(AppNavigator);
export default AppNavigatorContainer;
