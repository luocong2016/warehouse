import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ViewStyle, StyleSheet } from 'react-native';
import Item from './ListItem';
import listStyle from './style/index.native';

const listStyles = StyleSheet.create(listStyle);

function head_footFunc(renderEl, textStyle) {
  if (!renderEl) {
    return null;
  }
  let content = typeof renderEl === 'function' ? renderEl() : renderEl;

  if (typeof content === 'string') {
    content = <Text style={textStyle}>{content}</Text>;
    
  }
  return (<View>{content}</View>);
}

export default class List extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    renderHeader: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    renderFooter: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  }

  static Item = Item;

  static defaultProps = {
    styles: listStyles,
  }

  render() {
    const {
      style, styles,
      renderHeader, renderFooter,
      children,
      ...restProps
    } = this.props;
    const _styles = styles;
    const headerDom = head_footFunc(renderHeader, _styles.Header);
    const footerDom = head_footFunc(renderFooter, _styles.Footer);

    return (
      <View {...restProps} style={style}>
        {headerDom}
        <View style={_styles.Body}>
          {children}
          <View style={[_styles.BodyBottomLine]} />
        </View>
        {footerDom}
      </View>
    );
  }
}