import React from 'react';
import { View, Image } from 'react-native';
import { Button } from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const icon = <Icon name={'expand-more'} size={18} color={'#ccc'} />
const img = <Image source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }} style={{ width: 20, height: 20 }} />

export default () => (
  <View>
    <Button>default</Button>
    <Button disabled>default disabled</Button>

    <Button type="primary">primary</Button>
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

export const title = 'Button';
export const description = 'Button Example';
