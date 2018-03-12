import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

export default class FlexItem extends React.Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    flex: PropTypes.number,
    disable: PropTypes.bool,
    children: PropTypes.any,
    onPress: PropTypes.func,
    onLongPress: PropTypes.any,
    onPressIn: PropTypes.any,
    onPressOut: PropTypes.any,
  };

  static defaultProps = {
    flex: 1,
  };

  render() {
    const { style, children, flex, ...restProps } = this.props;
    const flexItemStyle = { flex: flex || 1 };
    const inner = (
      <View style={[flexItemStyle, style]} {...restProps}>
        {children}
      </View>
    );
    const shouldWrapInTouchableComponent =
      restProps.onPress ||
      restProps.onLongPress ||
      restProps.onPressIn ||
      restProps.onPressOut;

    if (!!shouldWrapInTouchableComponent) {
      return (
        <TouchableWithoutFeedback {...restProps}>
          {inner}
        </TouchableWithoutFeedback>
      );
    } else {
      return inner;
    }
  }
}
