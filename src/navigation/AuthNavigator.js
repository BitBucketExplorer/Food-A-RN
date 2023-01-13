import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInWelcome from '../screens/authScreens/SignInWelcome';
import SignIn from '../screens/authScreens/SignIn';
import Home from '../screens/Home';
import RootClientTabs from './ClientTabs';
import RestaurantsMap from '../screens/RestaurantsMap';
import DrawerNavigatorTab from './DrawerNavigatorTab';
const Auth = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcome"
        component={SignInWelcome}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="RestaurantsMap"
        component={RestaurantsMap}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="DrawerNavigatorTab"
        component={DrawerNavigatorTab}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
