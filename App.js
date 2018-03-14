import React from 'react';
import {
  Modal,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
// import { Button } from './components';

import Button from './test/button.test';
// import Drawer from './test/drawer.test';
// import Flex from './test/flex.test';
// import List from './test/list.test';
// import Modal from './test/modal.test';
// import Pagination from './test/pagination.test'
// import LocaleProvider from './test/localeProvider.test';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});


// export default class ModalExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   _setModalVisible = (visible) => {
//     this.setState({modalVisible: visible});
//     console.log('visible')
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: 'red'}}>
//         <Button onClick={this._setModalVisible(true)}>
//           Present
//         </Button>
//       </View>
//     );
//   }
// }



export default class App extends React.Component {
  render() {
    return (
      <Button />
    );
  }
}

