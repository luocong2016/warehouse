import React from 'react';
import { View, Text } from 'react-native';
import { Radio, List } from '../components';

const RadioItem = Radio.RadioItem;
const data = [
  { value: 0, label: 'doctor' },
  { value: 1, label: 'bachelor' },
];

export default class RadioExample extends React.Component {
  state = {
    value: 0,
    value2: 0,
  };

  onChange = (value) => {
    console.log('checkbox');
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

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
        <Radio>
          {
            data.map(i => (
              <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                {i.label}
              </RadioItem>
            ))
          }
        </Radio>
      </View>
    );
  }
}

export const title = 'Radio';
export const description = 'Radio Example';