import React from 'react';
import { View } from 'react-native';
import { Pagination, List, Button, LocaleProvider } from '../components';

import zh_CN from '../components/localeProvider/locale/zh_CN';
import en_US from '../components/localeProvider/locale/en_US';

const localeDemo = {
  prevText: 'up',
  nextText: 'down',
};

export default class LocaleProviderExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChinese: true };
  }

  handleClick = () => {
    this.setState({ isChinese: !this.state.isChinese });
  }

  render() {
    const locale = this.state.isChinese ? zh_CN : en_US;

    return (
      <View style={{ marginTop: 30 }}>
        <Button type="primary" onClick={this.handleClick}>
          { this.state.isChinese ? '切换到英文' : 'change to Chinese'}
        </Button>
        <LocaleProvider locale={locale}>
          <Pagination total={5} current={1} />
        </LocaleProvider>

        <Pagination total={5} current={1} style={{ marginTop: 10 }} locale={localeDemo} />
      </View>
    );
  } 
}

export const title = 'LocaleProvider';
export const description = 'LocaleProvider Example';