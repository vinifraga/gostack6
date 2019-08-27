import React, { Component, Fragment } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';

import '~/config/DevToolsConfig';
import '~/config/ReactotronConfig';
import Post from '~/components/Post';

console.tron.log('Conectei e debugei');

const styles = StyleSheet.create({
  header: {
    flex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    flex: -1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e94949',
    paddingTop: 20,
  },
  scroll: {
    flex: 1,
  },
});

export default class Main extends Component {
  state = {
    Posts: [
      {
        id: Math.random(),
        title: 'GoNode',
        author: 'Vinícius Fraga',
        description:
          'Lorem ipsum dolor sit amet, te usu aeque causae vulputate. Id maiorum honestatis eam, nec virtute omittam vituperatoribus id. Ea vis error legendos, sonet civibus ad sit. An assum oratio duo. Id mel sale molestiae, ius omnes omnesque in.',
      },
      {
        id: Math.random(),
        title: 'GoReact',
        author: 'Gabriela Baliza',
        description:
          'Lorem ipsum dolor sit amet, te usu aeque causae vulputate. Id maiorum honestatis eam, nec virtute omittam vituperatoribus id. Ea vis error legendos, sonet civibus ad sit. An assum oratio duo. Id mel sale molestiae, ius omnes omnesque in.',
      },
      {
        id: Math.random(),
        title: 'GoNative',
        author: 'Badu Nina',
        description:
          'Lorem ipsum dolor sit amet, te usu aeque causae vulputate. Id maiorum honestatis eam, nec virtute omittam vituperatoribus id. Ea vis error legendos, sonet civibus ad sit. An assum oratio duo. Id mel sale molestiae, ius omnes omnesque in.',
      },
    ],
  };

  render() {
    const { Posts } = this.state;
    return (
      <Fragment>
        <View style={styles.header}>
          <Text style={styles.headerText}>GoNative Challenge 1</Text>
        </View>
        <View style={styles.container}>
          <ScrollView style={styles.scroll}>
            {Posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}
