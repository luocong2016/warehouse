import React from 'react';
import PropsTypes from 'prop-types';
import { Image, View, TouchableHighlight, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import listStyle from './style/index.native';

const listStyles = StyleSheet.create(listStyle);

function arrEnumFunc(size = 16, color = '#ccc') {
  return (
    {
      horizontal: <Icon name={'chevron-right'} size={size} color={color} />,
      down: <Icon name={'expand-more'} size={size} color={color} />,
      up: <Icon name={'expand-less'} size={size} color={color} />,
    }
  );
};

function alignStyleFunc(align) {
  switch (align) {
    case 'top':
      return { alignItems: 'flex-start' }
    case 'bottom':
      return { alignItems: 'flex-end' }
    default:
      return {};
  };
}

function contentDomFunc(itemStyles, numberOfLines, children) {
  if(Array.isArray(children)) {
    let tempComtentDom = [];
    children.forEach((el, index) => {
      if(React.isValidElement(el)) {
        tempComtentDom.push(el)
      } else {
        tempComtentDom.push(
          <Text
            key={`${index}-children`}
            style={[itemStyles.Content]}
            {...numberOfLines}
          >
            {el}
          </Text>
        )
      }
    })
    return (
      <View style={[itemStyles.column]}>
        {tempComtentDom}
      </View>
    );
  } else {
    if(React.isValidElement(children)) {
      return (
        <View style={[itemStyles.Content]}>
          {children}
        </View>
      );
    } else {
      return (
        <View style={[itemStyles.Content]}>
          <Text {...numberOfLines}>{children}</Text>
        </View>
      );
    }
  }
}

function extraDomFunc(itemStyles, numberOfLines, extra) {
  let extraDom;
  if(extra) {
    extraDom = (
      <View style={[itemStyles.column]}>
        <Text style={[itemStyles.Extra]} {...numberOfLines}>{extra}</Text>
      </View>
    );

    if(React.isValidElement(extra)) {
      const extraChildren = extra.props.children;
      if(Array.isArray(extraChildren)) {
        let tempExtraDom = [];
        extraChildren.forEach((el, index) => {
          if (typeof el === 'string') {
            tempExtraDom.push(
              <Text
                key={`${index}-children`}
                style={[itemStyles.Extra]}
                {...numberOfLines}
              >
                {el}
              </Text>
            );
          } else {
            tempExtraDom.push(el);
          }
        });
        extraDom = (
          <View style={[itemStyles.column]}>
            {tempExtraDom}
          </View>
        );
      } else {
        extraDom = extra;
      }
    }
  }
  return extraDom;
}

export class Brief extends React.Component {
  static propsTypes = {
    wrap: PropsTypes.bool,
    children: PropsTypes.any,
    style: PropsTypes.oneOfType([PropsTypes.array, PropsTypes.object]),
    styles: PropsTypes.oneOfType([PropsTypes.array, PropsTypes.object]),
  }

  static defaultProps = {
    styles: listStyle,
  }

  render() {
    const { children, style, styles, wrap } = this.props;
    const numberOfLines = wrap === false ? { numberOfLines: 1 } : {};
    
    return (
      <View style={styles && styles.Brief}>
        <Text style={[styles && styles.Brief, style]} {...numberOfLines}>
          {children}
        </Text>
      </View>
    );
  }

}

export default class Item extends React.Component {
  static propsTypes = {
    children: PropsTypes.any,
    wrap: PropsTypes.bool,
    disabled: PropsTypes.bool,
    multipleLine: PropsTypes.bool,
    arrow: PropsTypes.oneOf(['horizontal', 'up', 'down', 'empty']),
    align: PropsTypes.oneOf(['top', 'middle', 'bottom']),
    style: PropsTypes.oneOfType([PropsTypes.array, PropsTypes.object]),
    styles: PropsTypes.oneOfType([PropsTypes.array, PropsTypes.object]),
    extra: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.element]),
    thumb: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.element]),
    onClick: PropsTypes.func,
    onPressIn: PropsTypes.func,
    onPressOut: PropsTypes.func,
  }

  static defaultProps = {
    multipleLine: false,
    wrap: false,
    styles: listStyles,
  }

  static Brief = Brief;

  render() {
    const {
      style,
      styles,
      children,
      multipleLine,
      wrap,
      thumb,
      extra,
      arrow,
      align,
      disabled,
      onClick,
      onPressIn,
      onPressOut,
      ...restProps
    } = this.props;
    const itemStyles = styles;
    const alignStyle = alignStyleFunc(align);
    const numberOfLines = wrap === false ? { numberOfLines: 1 } : {};
    const contentDom = contentDomFunc(itemStyles, numberOfLines, children);
    const extraDom = extraDomFunc(itemStyles, numberOfLines, extra);
    const arrEnum = arrEnumFunc();
    const underlayColor =
      (!disabled && onClick)
      ?
        {
          underlayColor: StyleSheet.flatten(itemStyles.underlayColor).backgroundColor,
          activeOpacity: 0.5,
        }
        :
        {
          activeOpacity: 1,
        };
       
    const itemView = (
      <View {...restProps} style={[itemStyles.Item, style]}>
        {
          typeof thumb === 'string'
          ?
            (
              <Image
                source={{ uri: thumb }}
                style={[itemStyles.Thumb, multipleLine && itemStyles.multipleThumb]}
              />
            )
              :
            thumb
        }
        <View style={[itemStyles.Line, multipleLine && itemStyles.multipleLine, multipleLine && alignStyle]}>
          {contentDom}
          {extraDom}
          {arrow ? (arrEnum[arrow] || <View style={itemStyles.Arrow} />) : null}
        </View>
      </View>
    );
    
    return (
      <TouchableHighlight
        onPress={onClick ? onClick : undefined}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        {...underlayColor}
      >
        {itemView}
      </TouchableHighlight>
    );

  }
}