import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNAccordion from 'react-native-collapsible/Accordion';
import AccordionStyle from './style/index.native';

class AccordionPanel extends React.Component {
  static propTypes = {
    key: PropTypes.string,
    hander: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  };

  render() {
    return null;
  }
}

class Accordion extends React.Component {
  static Panel;

  static propTypes = {
    children: PropTypes.any,
    styles: PropTypes.object,
    defaultActiveKey: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    activeKey: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    onChange: PropTypes.func,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
  };

  static defaultProps = {
    iconColor: '#ccc',
    iconSize: 16,
    styles: AccordionStyle,
    onChange: () => {},
  };

  renderHeader = (section, _, isActive) => {
    const { styles, iconSize, iconColor } = this.props;

    return (
      <View style={[styles.header, section.style]}>
        {
          React.isValidElement(section.title)
          ? section.title
          : (
            <View style={styles.headerWrap}>
              <Text style={styles.headerText}>{section.title}</Text>
            </View>
          )
        }
        <Icon name={`keyboard-arrow-${isActive ? 'up' : 'down'}`} size={iconSize} color={iconColor} />
      </View>
    );
  }

  renderContent = (section) => {
    const { styles }  = this.props;

    return React.isValidElement(section.content)
      ? section.content
      : (
        <View style={styles.content}>
          <Text style={styles.contentText}>{section.content}</Text>
        </View>
      );
  }

  onChange = (idx) => {
    const { onChange, children } = this.props;
    let key;

    React.Children.map(children, (child, index) => {
      if(idx === index) {
        key = child.key || `${index}`
      }
    });

    if (onChange) {
      onChange(key);
    }
  }

  render() {
    const { style, styles, activeKey, defaultActiveKey, children } = this.props;
    let defaultActiveSection, activeSection;

    const headers = React.Children.map(children, (child, index) => {
      const key = child.key || `${index}`;

      if (key === defaultActiveKey) {
        defaultActiveSection = index;
      }

      if (key === activeKey) {
        activeSection = index;
      }

      return (
        {
          title: child.props.header,
          content: child.props.children,
          style: child.props.style || {},
        }
      );
    });

    return (
      <View style={[style, styles.container]}>
        <RNAccordion
          duration={0}
          underlayColor="transparent"
          initiallyActiveSection={defaultActiveSection}
          activeSection={activeSection}
          sections={headers}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          onChange={this.onChange}
        />
      </View>
    );
  }
}

Accordion.Panel = AccordionPanel;

export default Accordion;
