import React from 'react';
import {
  TouchableOpacity, View, Text, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './styles';

const goToIssues = (navigation, name, fullName) => navigation.navigate('Issues', { name, fullName });

const RepositoryItem = ({
  repo: {
    avatar, name, login, fullName,
  }, navigation,
}) => (
  <TouchableOpacity style={styles.container} onPress={() => goToIssues(navigation, name, fullName)}>
    <View style={styles.info}>
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <View>
        <Text style={styles.repoName}>{name}</Text>
        <Text style={styles.orgName}>{login}</Text>
      </View>
    </View>
    <Icon name="chevron-right" style={styles.more} />
  </TouchableOpacity>
);

RepositoryItem.propTypes = {
  repo: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(RepositoryItem);
