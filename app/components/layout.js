import React from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { Actions, DefaultRenderer } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { removeFromTodoList } from '../actions';

class Layout extends React.Component {
  state = {
    showPopup: false
  };

  render() {
    const { todoList, removeTodoItem } = this.props;
    const state = this.props.navigationState.children[this.props.navigationState.children.length - 1];
    return (
      <View style={styles.container}>
        {React.createElement(this.props.navigationState.children[this.props.navigationState.children.length - 1].component)}
        {this.state.showPopup ? 
          <View style={{width: '100%', height: 45, position: 'absolute', bottom: 45, backgroundColor: 'blue', zIndex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ width: '100%', textAlign: 'center' }}>Popup</Text>
          </View>
        : null }
        <TouchableHighlight style={{width: '100%', height: 20, bottom: 45, position: 'absolute', backgroundColor: 'red', zIndex: 1}} onPress={() => this.setState({ showPopup: true })}>
          <View style={{width: '100%', height: 20, backgroundColor: 'coral'}} />
        </TouchableHighlight>
        <View style={{width: '100%', height: 45, position: 'absolute', bottom: 0, justifyContent: 'space-between', flexDirection: 'row'}}>
          <TouchableHighlight style={{flex: 1, justifyContent: 'center', backgroundColor: `#${Math.floor(Math.random()* 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`}} onPress={Actions.tab1}>
            <Text style={{textAlign: 'center', width: '100%'}}>Add</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{flex: 1, justifyContent: 'center', backgroundColor: `#${Math.floor(Math.random()* 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`}} onPress={Actions.tab2}>
            <Text style={{textAlign: 'center', width: '100%'}}>Grocery</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{flex: 1, justifyContent: 'center', backgroundColor: `#${Math.floor(Math.random()* 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`}} onPress={Actions.tab3}>
            <Text style={{textAlign: 'center', width: '100%'}}>Todo</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Layout;

const styles = {
  container: {
    marginTop: 80,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
