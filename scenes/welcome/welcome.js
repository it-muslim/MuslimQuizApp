import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';


export default class WelcomeScreen extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.signIn = this.signIn.bind(this);
  }

  signIn(){
  }
  signUp(){

  }

  render() {
    return (
      <View style={styles.View}>
      <Button
        onPress={this.signIn}
        title="Sign In"
        color="#841584"
        accessibilityLabel="Sign In"
      />
      <Button
        onPress={this.signUp}
        title="Sign UP"
        color="#841584"
        accessibilityLabel="Sign Up"
      />
      </View>
    );
  }
}


var styles = StyleSheet.create({
  View: {
    backgroundColor: '#F5FCFF',
  }});
