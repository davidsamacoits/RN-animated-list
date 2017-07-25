import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import Styles from './Styles';
import AnimatedList from './AnimatedList';

import data from './data/TVshows.js';

class App extends Component {
  // render
  render() {
    return (
      <View style={Styles.App.container}>
        <AnimatedList data={data} />
      </View>
    );
  }
}

export default App;
