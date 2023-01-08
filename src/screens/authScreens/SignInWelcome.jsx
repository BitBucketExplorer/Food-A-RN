import React, {Fragment, useState, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors, parameters, titleStyle} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import {imageSources, styleImageView, styleImage} from './imageSource';

const SignInWelcome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={styles.pageTitle}>DISCOVER RESTAURANTS</Text>
        <Text style={styles.pageTitle}>IN YOUR AREA</Text>
      </View>
      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          {imageSources.map(img => (
            <View style={styleImageView} key={img.id}>
              <Image source={{uri: img.URL}} style={styleImage} />
            </View>
          ))}
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Button
            title="SIGN-IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Button
            title="Create Your Account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 25,
    color: colors.appTheme,
    fontWeight: 'bold',
  },
  wrapper: {},
  createButton: {
    backgroundColor: colors.white,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.buttons,
    paddingHorizontal: 20,
    height: 40,
  },
  createButtonTitle: {
    color: colors.grey1,
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});

export default SignInWelcome;
