import React from 'react';
import PropTypes from 'prop-types';

export default class LocaleProvider extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    locale: PropTypes.shape({
      Pagination: PropTypes.object,
    }),
  }

  static childContextTypes = {
    warehouseLocale: PropTypes.object,
  }

  getChildContext() {
    return {
      warehouseLocale: {
        ...this.props.locale,
        exist: true,
      }
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}