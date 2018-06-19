import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Root from './containers/Root';
import Demo from './containers/JobToday'

export default class extends Component {
  render() {
    return (
      <Demo />
    );
  }
}