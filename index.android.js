/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';

import { appReducer } from './app/reducers';
import Lists from './app/components/lists';
import GroceryList from './app/components/groceryList';
import TodoList from './app/components/todoList';

class TabIcon extends React.Component {
  render() {
    const color = `#${Math.floor(Math.random()* 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
    return (
      <View style={{backgroundColor: color, width: '100%', height: '100%', justifyContent: 'center'}}>
        <Text style={{color: this.props.selected ? 'pink' :'white', textAlign: 'center', fontSize :20}}>{this.props.title}</Text>
      </View>
    );
  }
}

const Scenes = Actions.create(
  <Scene key='root' tabs={true} hideNavBar>
    <Scene key='tab1' title='Add' hideNavBar component={Lists} icon={TabIcon} />
    <Scene key='tab2' title='Grocery' component={GroceryList} icon={TabIcon}/>
    <Scene key='tab3' title='To Do' component={TodoList} icon={TabIcon}/>
  </Scene>
);

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer);

export default class ExampleTabs extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ExampleTabs', () => ExampleTabs);
