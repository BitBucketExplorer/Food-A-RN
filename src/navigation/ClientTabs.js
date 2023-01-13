import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import Home from '../screens/Home';
import Search from '../screens/Search';
import MyOrder from '../screens/MyOrder';
import MyAccount from '../screens/MyAccount';

const Tab = createBottomTabNavigator();
const RootClientTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.appTheme,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          tabBarLabel: 'Order',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: 'Account',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default RootClientTabs;
