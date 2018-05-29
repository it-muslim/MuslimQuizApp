import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  View
} from 'react-native';


type Props = {};
export default class TopicsScreen extends Component<Props> {

  render() {
    return (
      <QuizTable />
    );
  }
}
