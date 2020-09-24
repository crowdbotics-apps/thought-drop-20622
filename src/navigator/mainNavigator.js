import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings108205Navigator from '../features/Settings108205/navigator';
import UserProfile108203Navigator from '../features/UserProfile108203/navigator';
import UserProfile108107Navigator from '../features/UserProfile108107/navigator';
import Tutorial108106Navigator from '../features/Tutorial108106/navigator';
import NotificationList108078Navigator from '../features/NotificationList108078/navigator';
import Settings108077Navigator from '../features/Settings108077/navigator';
import Settings108069Navigator from '../features/Settings108069/navigator';
import UserProfile108067Navigator from '../features/UserProfile108067/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings108205: { screen: Settings108205Navigator },
UserProfile108203: { screen: UserProfile108203Navigator },
UserProfile108107: { screen: UserProfile108107Navigator },
Tutorial108106: { screen: Tutorial108106Navigator },
NotificationList108078: { screen: NotificationList108078Navigator },
Settings108077: { screen: Settings108077Navigator },
Settings108069: { screen: Settings108069Navigator },
UserProfile108067: { screen: UserProfile108067Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
