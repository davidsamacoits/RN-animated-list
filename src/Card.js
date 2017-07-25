import React, { Component } from 'react';
import {
  Image, TouchableOpacity, Text
} from 'react-native';
import Styles from './Styles';

class Card extends Component {
  // render
  render() {
    return (
      <TouchableOpacity
        style={Styles.Card.container}
        activeOpacity={0.75}
      >
        <Image
          source={this.props.imageSrc}
          style={Styles.Card.image}
        />
      </TouchableOpacity>
    );
  }
}

export default Card;
