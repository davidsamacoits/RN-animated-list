import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import Styles from './Styles';
import AnimatedList from './AnimatedList';
import Card from './Card';

import data from './data/TVshows.js';

class App extends Component {
  // render
  render() {
    return (
      <View style={Styles.App.container}>
        <AnimatedList>
          {data.map((item, index) =>
            <Card
              index
              key={item.id}
              imageThumbSrc={{ uri: `https://image.tmdb.org/t/p/w92/${item.poster_path}` }}
              imageSrc={{ uri: `https://image.tmdb.org/t/p/w780/${item.poster_path}` }}
            />
          )}
        </AnimatedList>
      </View>
    );
  }
}

export default App;
