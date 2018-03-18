import React from 'react';
import { View, Text } from 'react-native';
import { Radio, List, Flex } from '../components';

const RadioItem = Radio.RadioItem;
const data = [
  { value: 0, label: 'doctor' },
  { value: 1, label: 'bachelor' },
];
const data2 = [
  { value: 0, label: 'basketball', extra: 'details' },
  { value: 1, label: 'football', extra: 'details' },
];

export default class RadioExample extends React.Component {
  state = {
    value: 0,
    value2: 0,
    value3: 0,
    value4: false,
    value5: false,
  };

  onChange = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { value, value2, value3, value4 } = this.state;

    return (
      <View>
        <List renderHeader={() => 'RadioItem demo'}>
          {
            data.map(i => (
              <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange('value', i.value)}>
                {i.label}
              </RadioItem>
            ))
          }
        </List>

        <List renderHeader={() => 'List.Item.Brief'}>
          {
            data2.map(i => (
              <RadioItem key={i.value} checked={value2 === i.value} onChange={() => this.onChange('value2', i.value)}>
                {i.label}
                <List.Item.Brief>{i.extra}</List.Item.Brief>
              </RadioItem>
            ))
          }
        </List>

        <List renderHeader={() => 'disabled'}>
          {
            data.map(i => (
              <RadioItem key={i.value} checked={value3 === i.value} onChange={() => this.onChange('value3', i.value)} disabled>
                {i.label}
              </RadioItem>
            ))
          }
      </List>

      <List renderHeader={() => 'type'}>
        <List.Item>
          <Radio checked={this.state.value4} onChange={({checked}) => this.setState({ value4: !this.state.value4})} type="circle" >Agree</Radio>
        </List.Item>
      </List>

       <List renderHeader={() => 'type disabled'}>
        <List.Item>
          <Radio disabled checked={this.state.value5} onChange={({checked}) => this.setState({ value4: !this.state.value4})} type="circle" >Agree</Radio>
        </List.Item>
      </List>

      </View>
    );
  }
}

export const title = 'Radio';
export const description = 'Radio Example';