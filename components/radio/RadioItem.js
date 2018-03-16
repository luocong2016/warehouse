import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import RadioItemStyle from './style/index.native';
import List from '../list';
import Radio from "./index";

const RadioItemStyles = StyleSheet.create(RadioItemStyle);
const ListItem = List.Item;
const refRadio = 'radio';

export default class RadioItem extends React.Component {
  static propsTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.any,
    checked: PropTypes.bool,
    styles: PropTypes.object,
    radioStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    defaultChecked: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    styles: RadioItemStyles,
  };

  rendContentDOM = () => {
    const { children, disabled, styles } = this.props;

    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return child;
      }
      
      if (typeof child === 'string') {
        const contentStyle = [styles.radioItemContent, disabled ? styles.radioItemContentDisable : {}];
        return (
          <Text style={contentStyle} numberOfLines={1}>{child}</Text>
        );
      }

      return null;
    });
    
  }

  handleClick = () => {
    let radio = this.refs[refRadio];
    radio.handleClick();
  }

  render() {
    const { style, radioStyle, defaultChecked, disabled, checked, onChange } = this.props;
    const radioEl = (
      <Radio
        ref={refRadio}
        style={radioStyle}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    );

    return (
      <ListItem
        style={style}
        onClick={disabled ? undefined : this.handleClick}
        extra={radioEl}
      >
        {this.rendContentDOM()}
      </ListItem>
    );
  }
}