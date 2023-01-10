import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from '../global/styles';
import {Icon} from 'react-native-elements';

function Header({title, type, navigation}) {
  return (
    <View style={styles.header}>
      <View style={styles.iconStyle}>
        <Icon
          type="material-community"
          name={type}
          color={colors.white}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title.toUpperCase()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
    marginTop: 3,
  },
  iconStyle: {
    marginLeft: 20,
    marginTop: 3,
  },
});

export default Header;
