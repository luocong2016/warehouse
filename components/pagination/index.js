import React from 'react';
import PropsTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import paginationStyle from './style/index.native';

export default class Pagination extends React.Component {
  static propTypes = {
    style: PropsTypes.oneOfType([PropsTypes.array, PropsTypes.object]),
    indicatorStyle: PropsTypes.oneOfType([PropsTypes.array, PropsTypes.object]),
    mode: PropsTypes.oneOf(['button', 'number', 'pointer']),
    current: PropsTypes.number,
    total: PropsTypes.number,
    prevText: PropsTypes.string,
    nextText: PropsTypes.string,
    simple: PropsTypes.bool,
    onPrev: PropsTypes.func,
    onNext: PropsTypes.func,
    onChange: PropsTypes.func,
  };

  static defaultProps = {
    style: paginationStyle,
    mode: 'button',
    current: 1,
    total: 0,
    simple: false,
    indicatorStyle: null,
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      current: props.current
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.current !== this.state.current) {
      this.setState({ current: nextProps.current })
    }
  }

  onChange(current) {
    this.setState({ current });
    
    if (this.props.onChange) {
      this.props.onChange(current);
    }
  }

  render() {
    const { style, mode, total, simple } = this.props;
  }

}