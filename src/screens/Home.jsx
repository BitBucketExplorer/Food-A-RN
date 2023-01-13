import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import {Icon, icon} from 'react-native-elements';
import {color} from 'react-native-reanimated';
import Category from '../components/Category';
import Filter from '../components/Filter';
import HomeHeader from '../components/HomeHeader';
import FoodCard from '../components/FoodCard';
import {colors, headerText} from '../global/styles';
import {filterData, foodCardData} from '../global/Data';
const SCREEN_WIDTH = Dimensions.get('window').width;
const Home = ({navigation}) => {
  const [delivery, setDelivery] = useState(true);
  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView
        stickyHeaderIndices={[0]}
        showsHorizontalScrollIndicator={true}>
        <View style={{backgroundColor: colors.white, paddingBottom: 8}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.appTheme : colors.grey5,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('RestaurantsMap');
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.appTheme,
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Filter />
        </View>
        <View>
          <Category />
        </View>
        <View>
          <View style={styles.header}>
            <Text style={{...headerText, paddingLeft: 20}}>
              Free delivery now
            </Text>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 16,
                  marginTop: -15,
                  marginRight: 5,
                }}>
                Options changing in
              </Text>
              <CountDown
                until={3600}
                size={16}
                digitStyle={{backgroundColor: colors.lightgreen}}
                digitTxtStyle={{color: colors.white}}
                timeToShow={['M', 'S']}
                timeLabels={{m: 'Min', s: 'Sec'}}
              />
            </View>

            <FlatList
              style={{marginTop: 10, marginBottom: 10}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={foodCardData}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => (
                <View>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.75}
                    restaurantName={item.restaurantName}
                    deliveryAvailable={item.deliveryTime}
                    discountAvailable={item.collectTime}
                    discountPercent={item.discount}
                    numberOfReview={
                      item.numberOfReview > 1000
                        ? (item.numberOfReview / 1000).toFixed(1) + 'K'
                        : item.numberOfReview
                    }
                    businessAddress={item.businessAddress}
                    farAway={item.farAway}
                    averageReview={item.averageReview}
                    images={item.images}
                  />
                </View>
              )}
            />
          </View>
        </View>
        <View>
          <View style={styles.header}>
            <Text style={{...headerText, paddingLeft: 20}}>
              Promotions available
            </Text>
          </View>
          <View>
            <FlatList
              style={{marginTop: 10, marginBottom: 10}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={foodCardData}
              keyExtractor={item => item.id.toString()}
              renderItem={({item, index}) => (
                <View>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.7}
                    restaurantName={item.restaurantName}
                    deliveryAvailable={item.deliveryTime}
                    discountAvailable={item.collectTime}
                    discountPercent={item.discount}
                    numberOfReview={
                      item.numberOfReview > 1000
                        ? (item.numberOfReview / 1000).toFixed(1) + 'K'
                        : item.numberOfReview
                    }
                    businessAddress={item.businessAddress}
                    farAway={item.farAway}
                    averageReview={item.averageReview}
                    images={item.images}
                  />
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.header}>
          <Text style={{...headerText, paddingLeft: 20}}>
            Restaurants in your area
          </Text>
        </View>
        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {foodCardData.map(item => (
            <View key={item.id} style={{paddingBottom: 20}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                restaurantName={item.restaurantName}
                numberOfReview={
                  item.numberOfReview > 1000
                    ? (item.numberOfReview / 1000).toFixed(1) + 'K'
                    : item.numberOfReview
                }
                businessAddress={item.businessAddress}
                farAway={item.farAway}
                averageReview={item.averageReview}
                images={item.images}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View>
        {delivery && (
          <View style={styles.mapButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RestaurantsMap');
              }}>
              <Icon
                name="place"
                type="material"
                size={32}
                color={colors.appTheme}
              />
              <Text style={{color: colors.grey2}}>Map</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.grey5,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '700',
  },
  mapButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: colors.white,
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
  },
});
export default Home;
