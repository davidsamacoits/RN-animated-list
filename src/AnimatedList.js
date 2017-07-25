import React, { Component } from 'react';
import {
  View, ScrollView, Text, Animated
} from 'react-native';

import Styles from './Styles';

class AnimatedList extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      xOffset: new Animated.Value(0),
    }
  }
  // onScroll event
  _onScroll(event) {
    this.setState({
      xOffset: event.nativeEvent.contentOffset.x,
    });
  }
  // render
  render() {
    return (
      <View style={Styles.AnimatedList.scrollviewContainer}>
        <ScrollView
          style={Styles.AnimatedList.scrollview}
          horizontal
          showsHorizontalScrollIndicator= {false}
          contentContainerStyle={Styles.AnimatedList.scrollviewContentContainer}
          scrollEventThrottle={16}
          onScroll={(event) => this._onScroll(event)}
        >
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

export default AnimatedList;
