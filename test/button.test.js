import React from 'react';
import { View, Image } from 'react-native';
import { Button } from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const icon = <Icon name={'expand-more'} size={18} color={'#ccc'} />
const img = <Image source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }} style={{ width: 20, height: 20 }} />
const typeArr = ['primary', 'warning', 'ghost'];

export default class ButtonExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'warning',
    };
  }

  onChangeType = (e) => {
    e.persist();
    const { type } = this.state;
    const index = typeArr.indexOf(type)
    this.setState({ type: typeArr[(index + 1) % 3] });
  }

  render () {
    return (
      <View>
        <Button>default</Button>
        <Button disabled>default disabled</Button>

        <Button type={this.state.type} onClick={this.onChangeType}>{this.state.type}</Button>
        <Button type="primary" disabled>primary disabled</Button>

        <Button type="warning">warning</Button>
        <Button type="warning" disabled>warning disabled</Button>

        <Button loading>loading button</Button>

        <Button type="ghost">ghost</Button>
        <Button type="ghost" disabled>ghost disabled</Button>
        <Button type="ghost" size="small">ghost</Button>

        <Button icon={icon}>test icon</Button>
        <Button icon={img}>test img</Button>
      </View>
    );
  }
}

export const title = 'Button';
export const description = 'Button Example';
