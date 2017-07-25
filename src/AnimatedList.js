import React, { Component } from 'react';
import {
  View, ScrollView, Text
} from 'react-native';

import Styles from './Styles';

class AnimatedList extends Component {
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    );
  }
}

export default AnimatedList;
