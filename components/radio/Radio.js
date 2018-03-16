import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedback, Image, Text, View, StyleSheet } from 'react-native';
import RadioItem from './RadioItem';
import RadioStyle  from './style/index.native';

const RadioStyles = StyleSheet.create(RadioStyle);

export default class Radio extends React.Component {
  static RadioItem;

  static defaultProps = {
    styles: RadioStyles,
  };

  static propsTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    styles: PropTypes.object,
    disabled: PropTypes.bool,
    children: PropTypes.any,
  };

  constructor(props, context) {
    super(props);
    this.state = {
      checked: props.checked || props.defaultChecked || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({ checked: !!nextProps.checked })
    }
  }

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }

    if (!('checked' in this.props)) {
      this.setState({ checked: true });
    }

    if (this.props.onChange) {
      this.props.onChange({target: {checked: true}});
    }
  }

  render() {
    const { checked } = this.state;
    const { style, styles, disabled, children } = this.props;

    return (
      <TouchableWithoutFeedback>
        <View style={[styles.wrapper]}>
          {
            checked
            ? <Icon name={'check'} size={16} color={checked ? '#108ee9' : '#cccccc'} />
            : null
          }
          
          {
            typeof children === 'string'
              ? <Text>{children}</Text>
              : children
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
