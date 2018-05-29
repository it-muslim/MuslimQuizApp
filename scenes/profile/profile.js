import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  View
} from 'react-native';


type Props = {};
export default class ProfileScreen extends Component<Props> {

  openTopics(){}
  openQuizes(){}

  render() {
    return (
      <View>
      <Button
        onPress={this.openTopics}
        title="Topics"
        color="#841584"
        accessibilityLabel="Topics"
      />
      <Button
        onPress={this.openQuizes}
        title="Quizes"
        color="#841584"
        accessibilityLabel="Quizes"
      />
      </View>
    );
  }
}
