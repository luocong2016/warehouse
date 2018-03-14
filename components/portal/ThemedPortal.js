import React from 'react';
import PropTypes from 'prop-types';
import createReactContext from 'create-react-context';

function withTheme (withTheme) {
  class ThemedComponent extends React.Component {
    render() {
      return false;
    }
  }
}

class ThemedPortal extends React.Component {
  render() {
    const { theme, children, restProps } = this.props;

    return (
      <Portal {...restProps}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </Portal>
    );
  }
}


export default withTheme(ThemedPortal);