import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated, Easing, View, StyleSheet,
  BackHandler, TouchableWithoutFeedback,
} from 'react-native';
import LocaleProvider from '../localeProvider';
import { getComponentLocale } from '../_util/getLocale';
import zh_CN from './locale/zh_CN';

export default class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    visible: PropTypes.bool,
    dismissable: PropTypes.bool,
    onDimiss: PropTypes.func,
  };

  static defaultProps = {
    width: 520,
    visible: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(props.visible ? 1 : 0),
      rendered: props.visible,
    };
  }

  render() {

  }

}