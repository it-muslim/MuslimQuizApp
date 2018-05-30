import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  View
} from 'react-native';

import QuizTable from './components/QuizTable';
import { Actions} from 'react-native-router-flux';

type Props = {};
export default class TopicsScreen extends Component<Props> {

  render() {
    return (
      <QuizTable />
    );
  }
}
