/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import {
  View, Text, FlatList, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import api from '~/services/api';
import IssueItem from './IssueItem';

export default class Issues extends Component {
  state = {
    issues: [],
    loading: true,
    tab: 0,
    toShow: [],
    refreshing: false,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.getIssues();
  }

  getIssues = async () => {
    this.setState({ refreshing: true });
    const { navigation } = this.props;
    const url = navigation.getParam('fullName');
    const { data } = await api.get(`${url}/issues`);
    const issues = data.map((item) => {
      const {
        id,
        title,
        state,
        html_url: html,
        user: { login, avatar_url: avatar },
      } = item;
      return {
        id,
        title,
        html,
        login,
        avatar,
        state,
      };
    });
    this.setState({
      issues,
      toShow: issues,
      refreshing: false,
      loading: false,
    });
  };

  selectTab = (id) => {
    const { tab } = this.state;
    if (id !== tab) {
      this.setState((state) => {
        switch (id) {
          case 0:
            return { toShow: [...state.issues], tab: 0 };
          case 1:
            return { toShow: state.issues.filter(item => item.state === 'open'), tab: 1 };
          case 2:
            return { toShow: state.issues.filter(item => item.state === 'closed'), tab: 2 };
          default:
            return { toShow: state.issues, tab: 0 };
        }
      });
    }
  };

  renderIssueItem = ({ item }) => <IssueItem issue={item} />;

  render() {
    const {
      loading, tab, toShow, refreshing,
    } = this.state;
    return (
      <View style={styles.container}>
        {loading || refreshing ? (
          <ActivityIndicator />
        ) : toShow.length < 1 ? (
          <View style={styles.vazio}>
            <Text style={styles.textVazio}>Nenhuma issue encontrada</Text>
          </View>
        ) : (
          <View style={styles.issues}>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.tab} onPress={() => this.selectTab(0)}>
                <Text style={tab === 0 && styles.selected}>Todas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab} onPress={() => this.selectTab(1)}>
                <Text style={tab === 1 && styles.selected}>Abertas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab} onPress={() => this.selectTab(2)}>
                <Text style={tab === 2 && styles.selected}>Fechadas</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              style={styles.list}
              data={toShow}
              keyExtractor={item => String(item.id)}
              renderItem={this.renderIssueItem}
              onRefresh={this.getIssues}
              refreshing={refreshing}
            />
          </View>
        )}
      </View>
    );
  }
}
