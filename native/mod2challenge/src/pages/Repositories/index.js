/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import {
  View, Text, TextInput, ActivityIndicator, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import RepositoryItem from './RepositoryItem';
import api from '~/services/api';

export default class Repositories extends Component {
  state = {
    repos: [],
    repository: '',
    loading: false,
    loadingRepos: true,
    refreshing: false,
  };

  async componentDidMount() {
    const repos = await AsyncStorage.getItem('@GitIssues:repos');

    this.setState({ repos: JSON.parse(repos) || [], loadingRepos: false });
  }

  showList = (repos, refreshing) => (repos.length < 1 ? (
    <Text>Nenhum repositório adicionado</Text>
  ) : (
    <FlatList
      style={styles.list}
      data={repos}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderRepositoryItem}
      onRefresh={this.updateRepos}
      refreshing={refreshing}
    />
  ));

  getRepo = async () => {
    this.setState({ loading: true, repository: '' });
    const { repository, repos } = this.state;
    const {
      data: {
        id,
        name,
        full_name: fullName,
        owner: { avatar_url: avatar, login },
      },
    } = await api.get(repository);

    this.setState({
      repos: [
        ...repos,
        {
          id,
          name,
          avatar,
          login,
          fullName,
        },
      ],
      loading: false,
    });
    AsyncStorage.setItem(
      '@GitIssues:repos',
      JSON.stringify([
        ...repos,
        {
          id,
          name,
          avatar,
          login,
          fullName,
        },
      ]),
    );
  };

  updateRepos = async () => {
    AsyncStorage.clear();
    this.setState({ refreshing: true });
    const { repos: oldRepos } = this.state;
    this.setState({ repos: [] });
    const repos = await Promise.all(
      oldRepos.map(async (repo) => {
        const {
          data: {
            id,
            name,
            full_name: fullName,
            owner: { login, avatar_url: avatar },
          },
        } = await api.get(repo.fullName);
        return {
          id,
          name,
          fullName,
          login,
          avatar,
        };
      }),
    );
    this.setState({
      repos: [...repos],
    });
    AsyncStorage.setItem('@GitIssues:repos', JSON.stringify([...repos]));
    this.setState({ refreshing: false });
  };

  renderRepositoryItem = ({ item }) => <RepositoryItem repo={item} />;

  render() {
    const {
      repository, repos, loading, refreshing, loadingRepos,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            value={repository}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ repository: text })}
            onSubmitEditing={this.getRepo}
          />
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Icon name="plus" onPress={this.getRepo} style={styles.add} />
          )}
        </View>
        {loadingRepos || refreshing ? (
          <ActivityIndicator style={{ paddingTop: 20 }} />
        ) : repos.length < 1 ? (
          <View style={styles.vazio}>
            <Text style={styles.textVazio}>Nenhum repositório adicionado</Text>
          </View>
        ) : (
          <FlatList
            style={styles.list}
            data={repos}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderRepositoryItem}
            onRefresh={this.updateRepos}
            refreshing={refreshing}
          />
        )}
      </View>
    );
  }
}
