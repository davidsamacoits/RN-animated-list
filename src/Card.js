import React, { Component } from 'react';
import {
  Image, TouchableOpacity, Text, Animated
} from 'react-native';
import Styles from './Styles';

class Card extends Component {
  // constructor
  constructor(props) {
    super(props);
    // Animated values
    this.state = {
      imageThumbOpacity: new Animated.Value(0),
      imageOpacity: new Animated.Value(0),
    };
  }
  // On image thumb loaded
  _onImageThumbLoaded() {
    Animated.timing(this.state.imageThumbOpacity, {
      toValue: 1,
      duration: 250
    }).start();
  }
  // On image loaded
  _onImageLoaded() {
    Animated.timing(this.state.imageOpacity, {
      toValue: 1,
      duration: 250
    }).start();
  }
  // render
  render() {
    return (
      <TouchableOpacity
        style={Styles.Card.container}
        activeOpacity={0.75}
      >
        <Animated.Image
          source={this.props.imageThumbSrc}
          style={[Styles.Card.imageThumb, { opacity: this.state.imageThumbOpacity }]}
          onLoad={() => this._onImageThumbLoaded()}
          blurRadius={4}
        />
        <Animated.Image
          source={this.props.imageSrc}
          style={[Styles.Card.image, { opacity: this.state.imageOpacity }]}
          onLoad={() => this._onImageLoaded()}
        />
      </TouchableOpacity>
    );
  }
}

export default Card;
