import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Todo from '~/components/Todo';
import './config/ReactotronConfig';
import './config/DevToolsConfig';

console.log('teste');
console.tron.log('Hello World');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default class App extends Component {
  state = {
    text: '',
    todos: [{ id: 0, text: 'Fazer café' }, { id: 1, text: 'Estudar o GoNative' }],
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: 'Novo todo' }],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Todo title="fazer café" />
        <Todo title="Estudar GoNative " />
        <Todo />
      </View>
    );
  }
}
