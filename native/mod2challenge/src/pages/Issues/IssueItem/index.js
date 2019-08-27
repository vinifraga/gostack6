import React from 'react';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const goToIssue = html => Linking.openURL(html);

const IssueItem = ({ issue }) => (
  <TouchableOpacity style={styles.container} onPress={() => goToIssue(issue.html)}>
    <View style={styles.info}>
      <Image style={styles.avatar} source={{ uri: issue.avatar }} />
      <View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.issueTitle}>
          {issue.title}
        </Text>
        <Text style={styles.authorName}>{issue.login}</Text>
      </View>
    </View>
    <Icon name="chevron-right" style={styles.more} />
  </TouchableOpacity>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    html: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default IssueItem;
