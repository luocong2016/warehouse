import React from 'react';
import { View } from 'react-native';
import { Pagination } from '../components';

const locale = {
  prevText: '上一步',
  nextText: '下一步',
};

export default class BasicPaginationExample extends React.Component {
  render() {
    return (
      <View>
        <Pagination total={5} current={1} locale={locale} />
        <View style={{ marginTop: 10 }} />
        <Pagination simple total={5} current={1} locale={locale} />
        <View style={{ marginTop: 10 }} />
        <Pagination mode="number" total={5} current={3} />
        <View style={{ marginTop: 10 }} />
        <Pagination mode="pointer" total={5} current={2} />
      </View>
    );
  }
}