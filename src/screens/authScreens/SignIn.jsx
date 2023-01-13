import React, {Fragment, useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {colors, parameters, titleStyle, socialIcon} from '../../global/styles';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';

const SignIn = ({navigation}) => {
  const [passwordInput, setPasswordInput] = useState(false);

  const txtInput1 = useRef(1);
  const txtInput2 = useRef(2);

  return (
    <Fragment>
      <View style={styles.container}>
        <Header title="My Account" type="arrow-left" navigation={navigation} />
        <View style={{marginLeft: 20, marginTop: 10}}>
          <Text style={titleStyle}> Sign-In</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 10, marginLeft: 30}}>
          <Text style={styles.description}>
            “If my mind can conceive it, If my heart
          </Text>
          <Text style={styles.description}>
            can believe it, Then I can achieve it”
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="xy.code@gmail.com"
              ref={txtInput1}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.textInput}>
            <Animatable.View
              animation={passwordInput ? '' : 'fadeInLeft'}
              duration={400}>
              <Icon
                name="lock"
                iconStyle={{color: colors.grey3}}
                type="material"
                style={{marginTop: 8}}
              />
            </Animatable.View>
            <TextInput
              style={{width: '80%'}}
              placeholder="Password"
              ref={txtInput1}
              onFocus={() => {
                setPasswordInput(false);
              }}
              onBlur={() => {
                setPasswordInput(true);
              }}
              keyboardType="visible-password"
            />
            <Animatable.View
              animation={passwordInput ? '' : 'fadeInLeft'}
              duration={400}>
              <Icon
                name="visibility-off"
                iconStyle={{color: colors.grey3}}
                type="material"
                style={{marginRight: 10, marginTop: 8}}
              />
            </Animatable.View>
          </View>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Button
            title="SIGN-IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('RootClientTabs');
            }}
          />
        </View>
        <View style={{alignItems: 'flex-end', marginRight: 30, marginTop: 10}}>
          <Text
            style={{...styles.description, textDecorationLine: 'underline'}}>
            Forgot Password ?
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: titleStyle.fontSize,
              fontWeight: titleStyle.fontWeight,
            }}>
            OR
          </Text>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <SocialIcon
            title="Sign In With Facebook"
            button
            type="facebook"
            style={socialIcon}
            onPress={() => {}}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <SocialIcon
            title="Sign In With Google"
            button
            type="google"
            style={socialIcon}
            onPress={() => {}}
          />
        </View>
        <View style={{alignItems: 'flex-start', marginLeft: 30, marginTop: 20}}>
          <Text
            style={{...styles.description, textDecorationLine: 'underline'}}>
            New on Xpress G9Hub ?
          </Text>
        </View>

        <View style={{alignItems: 'flex-end', marginRight: 30, marginTop: 20}}>
          <Button
            title="Create Account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  description: {
    color: colors.grey3,
    fontSize: 16,
  },
  textInput: {
    height: 45,
    marginTop: 12,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    justifyContent: 'center',
  },
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
    color: colors.buttons,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
export default SignIn;
