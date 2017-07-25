import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import Styles from './Styles';
import AnimatedList from './AnimatedList';

import data from './data/TVshows.js';

class App extends Component {
  // Render
  render() {
    return (
      <View style={Styles.App.container}>
        <AnimatedList>
          <Text>AnimatedList</Text>
        </AnimatedList>
      </View>
    );
  }
}

export default App;
