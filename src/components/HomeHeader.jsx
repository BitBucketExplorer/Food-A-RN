import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import {color} from 'react-native-elements/dist/helpers';
import {colors, parameters} from '../global/styles';
const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View
        style={{
          marginLeft: 15,
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.white}
          size={32}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.headerText}>Xpress CodeG9</Text>
      </View>
      <View
        style={{
          marginRight: 5,
        }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.appTheme,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default HomeHeader;
