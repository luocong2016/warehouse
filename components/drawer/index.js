import React from 'react';
import PropTypes from 'prop-types';
import DrawerLayout from 'react-native-drawer-layout';

const openFuncArr = ['onOpenChange', 'onDrawerOpen', 'onDrawerClose', 'drawerPosition', 'renderNavigationView'];

export default class Drawer extends React.Component {

  drawer;

  static propTypes = {
    children: PropTypes.any,
    drawerRef: PropTypes.func,
    drawerWidth: PropTypes.number,
    drawerBackgroundColor: PropTypes.string,
    open: PropTypes.bool,
    onOpenChange: PropTypes.func,
    position: PropTypes.oneOf(['left', 'right']),
    sidebar: PropTypes.any,
  }

  static defaultProps = {
    position: 'left',
    open: false,
    drawerWidth: 300,
  }

  componentDidMount() {
    if(this.props.open) {
      this.drawer.openDrawer();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.open !== this.props.open) {
      this.drawer[nextProps.open ? 'openDrawer' : 'closeDrawer']();
    }
  }

  onOpenChange(isOpen) {
    if(this.props.onOpenChange) {
      this.props.onOpenChange(isOpen);
    }
  }

  render() {
    const { sidebar, postion, drawerRef, ...restProps } = this.props;
    openFuncArr.forEach(prop => {
      if(restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });
    const _opsition = DrawerLayout.positions[postion === 'right' ? 'Right' : 'Left' ];

    return (
      <DrawerLayout
        ref={(el) => {
          if(drawerRef) {
            drawerRef(el);
          }
          this.drawer = el;
        }}
        renderNavigationView={() => sidebar}
        drawerPosition={_opsition}
        openDrawerOpen={() => this.onOpenChange(true)}
        onDrawerClose={() => this.onOpenChange(false)}
        keyboardDismissMode="on-drag"
        {...restProps}
      />
    );
  }

}