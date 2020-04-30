//import React from 'react';
//import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from '../pages/login';
import Home from '../pages/home';

const routes = {
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
};

export default routes;
