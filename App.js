import React from 'react';

// import Button from './test/button.test';
// import Drawer from './test/drawer.test';
// import Flex from './test/flex.test';
// import List from './test/list.test';
// import Pagination from './test/pagination.test'
import LocaleProvider from './test/localeProvider.test';


export default class App extends React.Component {
  render() {
    return (
      <LocaleProvider />
    );
  }
}
