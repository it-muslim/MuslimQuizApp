import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  NavigatorIOS
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';


import WelcomeScreen from './scenes/welcome/welcome'
import ProfileScreen from './scenes/profile/profile'
import TopicsScreen from './scenes/topics/topics'

export default App = () => (
  <Router>
    <Stack key="root">
      <Scene key="welcome" component={WelcomeScreen} title="Welcome" initial/>
      <Scene key="profile" component={ProfileScreen} title="Profile"/>
      <Scene key="topics" component={TopicsScreen} title="Topics"/>
    </Stack>
  </Router>
);
