import React from 'react';
import { Text, View } from 'react-native';
import { Modal, Button } from '../components'

export default class ModalExample extends React.Component {
  state = {
    visible: false,
  };

  onChangeVisible = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;

    return (
      <View>
        <Button onClick={this.onChangeVisible}>
          {visible ? '关闭' : '打开'}
        </Button>
        <Modal visible={visible}>
          <Text>Example Modal</Text>
        </Modal>
      </View>
      
    );
  }
}