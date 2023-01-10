import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Pressable, Image} from 'react-native';
import {colors, parameters, headerText} from '../global/styles';
import {filterData} from '../global/Data';
const Category = () => {
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View>
      <View style={styles.header}>
        <Text style={{...headerText, paddingLeft: 20}}>Categories</Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={filterData}
          keyExtractor={item => item.id}
          extraData={indexCheck}
          renderItem={({item, index}) => (
            <Pressable
              onPress={() => {
                setIndexCheck(item.id);
              }}>
              <View
                style={
                  indexCheck === item.id
                    ? {...styles.selectedCard}
                    : {...styles.card}
                }>
                <Image
                  style={{height: 60, width: 60, borderRadius: 30}}
                  source={item.image}
                />
                <View>
                  <Text
                    style={
                      indexCheck === item.id
                        ? {...styles.selectedCardText}
                        : {...styles.cardText}
                    }>
                    {item.name}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.grey5,
  },
  card: {
    borderRadius: 20,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  selectedCard: {
    borderRadius: 20,
    backgroundColor: colors.appTheme,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  cardText: {
    fontWeight: 'bold',
    color: colors.grey2,
  },
  selectedCardText: {
    fontWeight: 'bold',
    color: colors.white,
  },
});
export default Category;
