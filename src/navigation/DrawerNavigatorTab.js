// import * as React from 'react';
// import {View, Text} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import RootClientTabs from './ClientTabs';
// import {Icon} from 'react-native-elements';
// import {colors} from '../global/styles';

// const DrawerTab = createDrawerNavigator();

// const DrawerNavigatorTab = () => {
//   return (
//     <DrawerTab.Navigator>
//       <DrawerTab.Screen
//         name="RootClientTabs"
//         component={RootClientTabs}
//         options={{
//           title: 'Client',
//           drawerIcon: ({focussed, size}) => {
//             <Icon
//               type="material-community"
//               name="home"
//               color={focussed ? colors.FOCUSSED : colors.grey2}
//               size={size}
//             />;
//           },
//         }}
//       />
//     </DrawerTab.Navigator>
//   );
// };

// export default DrawerNavigatorTab;

import React from 'react';
import {View, Text} from 'react-native';
import {} from 'react-native-gesture-handler';
const DrawerNavigatorTab = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DrawerNavigatorTab</Text>
    </View>
  );
};

export default DrawerNavigatorTab;
