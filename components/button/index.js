import React from 'react';
import PropsTypes from 'prop-types';
import {
  ActivityIndicator, TouchableHighlight,
  StyleSheet, Text, View,
} from 'react-native';
import buttonStyle from './style/index.native';

const buttonStyles = StyleSheet.create(buttonStyle);
const enumarr = [
  'activeOpacity', 'underlayColor',
  'onPress', 'onPressIn', 'onPressOut',
  'onHideUnderlay' , 'onShowUnderlay'
];

export default class Button extends React.Component {
  static propTypes = {
    children: PropsTypes.any,
    disabled: PropsTypes.bool,
    loading: PropsTypes.bool,
    icon: PropsTypes.element,
    size: PropsTypes.oneOf(['large', 'small']),
    type: PropsTypes.oneOf(['primary', 'warning', 'ghost']),
    activeStyle: PropsTypes.oneOfType([PropsTypes.bool, PropsTypes.object]),
    style: PropsTypes.oneOfType([PropsTypes.object, PropsTypes.array]),
    styles: PropsTypes.oneOfType([PropsTypes.object, PropsTypes.array]),
    onClick: PropsTypes.func,
    onPressIn: PropsTypes.func,
    onPressOut: PropsTypes.func,
    onShowUnderlay: PropsTypes.func,
    onHideUnderlay: PropsTypes.func,
  };

  static defaultProps = {
    activeStyle: {},
    styles: buttonStyles,
    loading: false,
    pressIn: false,
    pressOut: false,
    onClick: () => null,
    onPressIn: () => null,
    onPressOut: () => null,
    onShowUnderlay: () => null,
    onHideUnderlay: () => null,  
  }

  onPressIn = (...arg) => {
    this.setState({ pressIn: true })
    if (this.props.onPressIn) {
      this.props.onPressIn(...arg)
    }
  }

  onPressOut = (...arg) => {
    this.setState({ pressIn: false })
    if (this.props.onPressOut) {
      this.props.onPressOut(...arg)
    }
  }

  onShowUnderlay = (...arg) => {
    this.setState({ touchIt: true });
    if (this.props.onShowUnderlay) {
      this.props.onShowUnderlay(...arg);
    }
  }

  onHideUnderlay = (...arg) => {
    this.setState({ touchIt: false });
    if (this.props.onHideUnderlay) {
      this.props.onHideUnderlay(...arg);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      pressIn: false,
      touchIt: false,
    };
  }

  render() {
    const { pressIn, touchIt } = this.state;
    const {
      children, icon,
      size = 'large', type = 'default', disabled, loading,
      activeStyle, style, styles,
      onClick,
      ...restProps
    } = this.props;
    const Icon = (React.isValidElement(icon) && !loading) ? icon : null;
    const _styles = styles;

    enumarr.forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    const textStyle = [
      _styles[`${size}RawText`],
      _styles[`${type}RawText`],
      disabled && _styles[`${type}DisabledRawText`],
      pressIn && _styles[`${type}HighlightText`],
    ];
    const wrapperStyle = [
      _styles.wrapperStyle,
      _styles[`${size}Raw`],
      _styles[`${type}Raw`],
      disabled && _styles[`${type}DisabledRaw`],
      pressIn && activeStyle && _styles[`${type}Highlight`],
      activeStyle && touchIt && activeStyle,
      style,
    ];
    const underlayColor = (StyleSheet.flatten(_styles[activeStyle ? `${type}Highlight` : `${type}Raw`])).backgroundColor;
    const indicatorColor = (StyleSheet.flatten(pressIn ? _styles[`${type}HighlightText`] : _styles[`${type}RawText`])).color;

    return (
      <TouchableHighlight
        activeOpacity={1}
        disabled={disabled}
        style={wrapperStyle}
        underlayColor={underlayColor}
        onPress={(e) => onClick && onClick(e)}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onShowUnderlay={this.onShowUnderlay}
        onHideUnderlay={this.onHideUnderlay}
        {...restProps}
      >
          <View style={_styles.container}>
            {
              loading ? 
                <ActivityIndicator
                  animating
                  size="small"
                  style={_styles.indicator}
                  color={indicatorColor}
                />
                  :
                null
            }
            {
              Icon
            }
            <Text style={textStyle}>{children}</Text>
          </View>
      </TouchableHighlight>
    );
  }

}