import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

import { Actions} from 'react-native-router-flux';

type Props = {};
export default class ProfileScreen extends Component<Props> {

  constructor(props) {
    super(props)
  }

  openTopics(){
      Actions.topics()
  }
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
