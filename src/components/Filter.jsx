import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../global/styles';
import {Icon, icon} from 'react-native-elements';
const Filter = () => {
  return (
    <View style={styles.filterView}>
      <View style={styles.addressView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 12,
          }}>
          <Icon
            type="material-community"
            name="map-marker"
            color={colors.grey1}
            size={26}
          />
          <Text style={{marginLeft: 5}}>45 Kausambi,UP </Text>
        </View>
        <View style={styles.clockView}>
          <Icon
            type="material-community"
            name="clock-time-four"
            color={colors.grey1}
            size={26}
          />
          <Text>Now</Text>
        </View>
      </View>
      <View>
        <Icon
          type="material-community"
          name="tune"
          color={colors.grey1}
          size={26}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginLeft: 40,
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 2,
    justifyContent: 'space-between',
    paddingHorizontal: 3,
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    marginLeft: 20,
    paddingHorizontal: 5,
    marginRight: 20,
  },
});

export default Filter;
