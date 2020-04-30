import {createStackNavigator, createAppContainer} from 'react-navigation';

import routes from './routes';

const Router = createStackNavigator(...routes, {
  headerBackTitleVisible: false,
  //initialRouteName: 'Login',
});

export default createAppContainer(Router);
