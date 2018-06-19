import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  WebView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Container, Button, Text } from 'native-base';

import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({ domain: 'dungnt.auth0.com', clientId: 'jC6e3ZO8MW8F55xw7NM3qEHj6FCbuqdF' });


export default class extends Component {

  async _onLogin() {
    auth0
    .webAuth
    .authorize({scope: 'openid email', audience: 'https://dungnt.auth0.com/userinfo'})
    .then(credentials => console.log(credentials))
    .catch(error => console.log('error'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Auth0Sample - Login
        </Text>
        <TouchableOpacity 
        onPress={()=> this._onLogin()}
        style={{marginTop: 30, height: 30, width: 200, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center'}}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
});