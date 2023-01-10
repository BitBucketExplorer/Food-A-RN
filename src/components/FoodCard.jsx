import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors, parameters, headerText} from '../global/styles';
import {Icon} from 'react-native-elements';
const FoodCard = ({
  OnPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
}) => {
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View>
      <TouchableOpacity>
        <View style={{...styles.card, width: screenWidth}}>
          <Image
            style={{...styles.cardImage, width: screenWidth}}
            source={{uri: images}}
          />

          <View>
            <View>
              <Text style={styles.restaurantName}>{restaurantName}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.distance}>
                <Icon
                  type="material"
                  name="place"
                  color={colors.grey2}
                  size={18}
                  iconStyle={{
                    marginTop: 3,
                  }}
                />
                <Text style={styles.Minutes}>{farAway} Min</Text>
              </View>
              <View style={{flex: 9, flexDirection: 'row'}}>
                <Text style={styles.address}>{businessAddress}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.review}>
          <Text style={styles.avgReview}>{averageReview}</Text>
          <Text style={styles.numberReview}>{numberOfReview} Rw</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 9,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey5,
  },
  cardImage: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 150,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 5,
    marginLeft: 5,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  Minutes: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3,
  },
  address: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.grey3,
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 10,
  },
  avgReview: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  numberReview: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    marginHorizontal: 0,
    paddingHorizontal: 7,
  },
});
export default FoodCard;
