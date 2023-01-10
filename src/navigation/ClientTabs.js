import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';

const ClientTabs = createBottomTabNavigator();
const ClientTabs = () => {
  return (
    <ClientTabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.appTheme,
      }}>
      <ClientTabs.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={colo} size={size} />
          ),
        }}></ClientTabs.Screen>
    </ClientTabs.Navigator>
  );
};

export default ClientTabs;
