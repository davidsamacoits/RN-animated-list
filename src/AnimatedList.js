import React, { Component } from 'react';
import {
  View, ScrollView, Text
} from 'react-native';

import Styles from './Styles';

class AnimatedList extends Component {
  render() {
    return (
      <View style={Styles.AnimatedList.scrollviewContainer}>
        <ScrollView
          style={Styles.AnimatedList.scrollview}
          horizontal
          showsHorizontalScrollIndicator= {false}
          contentContainerStyle={Styles.AnimatedList.scrollviewContentContainer}
        >
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

export default AnimatedList;
