import React from 'react';
import { View, Text } from 'react-native';
import { Radio, List, Flex } from '../components';

const RadioItem = Radio.RadioItem;
const data = [
  { value: 0, label: 'doctor' },
  { value: 1, label: 'bachelor' },
];

export default class RadioExample extends React.Component {
  state = {
    value: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  };

  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  };
  onChange2 = (value) => {
    console.log('checkbox');
    this.setState({
      value2: value,
    });
  };

  render() {
    const { value, value2, value3, value4 } = this.state;
    const data = [
      { value: 0, label: 'doctor' },
      { value: 1, label: 'bachelor' },
    ];
    const data2 = [
      { value: 0, label: 'basketball', extra: 'details' },
      { value: 1, label: 'football', extra: 'details' },
    ];

    return (
      <View>
        <List renderHeader={() => 'RadioItem demo'}>
          {
            data.map(i => (
              <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                {i.label}
              </RadioItem>
            ))
          }
        </List>

        <List renderHeader={() => 'RadioItem demo2'}>
          {
            data2.map(i => (
              <RadioItem key={i.value} checked={value2 === i.value} onChange={() => this.onChange2(i.value)}>
                {i.label}
                <List.Item.Brief>{i.extra}</List.Item.Brief>
              </RadioItem>
            ))
          }
        </List>

      </View>
    );
  }
}

export const title = 'Radio';
export const description = 'Radio Example';