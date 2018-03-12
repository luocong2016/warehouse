import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

export default class Flex extends React.Component {
  static propTypes = {
    disable: PropTypes.bool,
    children: PropTypes.any,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    direction: PropTypes.oneOf(['row', 'column']),
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly']),
    align: PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']),
    onPress: PropTypes.func,
    onLongPress: PropTypes.any,
    onPressIn: PropTypes.any,
    onPressOut: PropTypes.any,
  };

  static Item;

  static defaultProps = {
    direction: 'row',
    wrap: 'nowrap',
    justify: 'start',
    align: 'center',
  };

  render() {
    const { style, direction, wrap, justify, align, children, ...restProps } = this.props;
    let transferConst = [justify, align];

    transferConst = transferConst.map(el => {
      switch(el) {
        case 'start':
          return 'flex-start';
        case 'end':
          return 'flex-end';
        case 'between':
          return 'space-between';
        case 'around':
          return 'space-around';
        case 'evenly':
          return 'space-evenly';
        default:
          return el;
      }
    });

    const flexStyle = {
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent: transferConst[0],
      alignItems: transferConst[1],
    };
    const inner = (
      <View style={[flexStyle, style]} {...restProps}>
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