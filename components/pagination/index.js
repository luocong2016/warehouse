import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import zh_CN from './locale/zh_CN'
import paginationStyle from './style/index.native';
import { getComponentLocale } from '../_util/getLocale'
import Button from '../button';
import Flex from '../flex';

export default class Pagination extends React.Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    styles: PropTypes.object,
    indicatorStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    mode: PropTypes.oneOf(['button', 'number', 'pointer']),
    current: PropTypes.number,
    total: PropTypes.number,
    prevText: PropTypes.string,
    nextText: PropTypes.string,
    simple: PropTypes.bool,
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
    onChange: PropTypes.func,
  };

  static contextTypes = {
    warehouseLocale: PropTypes.object,
  }

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

  renderSimple(current, total, _styles) {
    return (
      <Flex.Item>
        <View style={[_styles.numberStyle]}>
          <Text style={[_styles.activeTextStyle]}>{current}</Text>
          <Text style={[_styles.totalStyle]}>/{total}</Text>
        </View>
      </Flex.Item>
    );
  }

  renderModeType(mode, current, total, prevText, nextText, simpleItem, _styles) {
    if (mode === 'number') {
      return (
        <View style={[_styles.numberStyle]}>
          <Text style={[_styles.activeTextStyle]}>{current}</Text>
          <Text style={[_styles.totalStyle]}>/{total}</Text>
        </View>
      );
    }
    
    if (mode === 'pointer') {
      let arr = [];
      for (let i = 1; i <= total; i++) {
        arr.push(
          <TouchableWithoutFeedback onPress={() => this.onChange(i)}>
            <View key={`dot-${i}`} style={[_styles.pointStyle, _styles.spaceStyle, i === current && _styles.pointActiveStyle]} />
          </TouchableWithoutFeedback>
        );
      }
      return (
        <View style={[_styles.indicatorStyle, this.props.indicatorStyle]}>{arr}</View>
      );
    }

    return (
      <Flex>
        <Flex.Item>
          <Button disabled={current <= 1} onClick={() => this.onChange(current - 1)}>{prevText}</Button>
        </Flex.Item>
        {simpleItem}
        <Flex.Item>
          <Button disabled={current >= total} onClick={() => this.onChange(current + 1)}>{nextText}</Button>
        </Flex.Item>
      </Flex>
    );
  }

  render() {
    const { style, styles, mode, total, simple } = this.props;
    const { current } = this.state;
    const _styles = { ...paginationStyle, ...styles };
    const locale = getComponentLocale(this.props, this.context, 'Pagination', () => zh_CN);
    const { prevText, nextText } = locale;
    const simpleItem = !simple ? this.renderSimple(current, total, _styles) : <Flex.Item />;
    const markup = this.renderModeType(mode, current, total, prevText, nextText, simpleItem, _styles);

    return (
      <View style={[_styles.container, style]}>{markup}</View>
    );
  }
}