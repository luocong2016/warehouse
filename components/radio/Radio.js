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
    type: 'none',
  };

  static propsTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    type: PropTypes.oneOf(['circle', 'none']),
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

  renderType = () => {
    const { checked } = this.state;
    const { type, disabled, styles } = this.props;

    if (checked && type === 'none') {
      return <Icon name={'check'} size={16} color={disabled ? '#cccccc' : '#108ee9'} />
    }

    if(type === 'circle') {
      return (
        <View
          style={[
            styles.radioTypeCircle ,
            { borderColor: checked && !disabled ? '#108ee9' : '#cccccc' },
            disabled ? { backgroundColor: '#f5f4f9' } : {}
          ]}
        >
          {
            checked
            ? <Icon name={'check'} size={16} color={disabled ? '#cccccc' : '#108ee9'} />
            : null
          }
        </View>
      );
    }

    return null; 
  }

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }

    if (!('checked' in this.props)) {
      this.setState({ checked: true });
    }

    if (this.props.onChange) {
      const { checked } = this.state;
      this.props.onChange({ checked });
    }
  }

  render() {
    const { style, styles, disabled, children, type } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.handleClick}>
        <View style={[styles.wrapper]}>
          {
            this.renderType()
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
