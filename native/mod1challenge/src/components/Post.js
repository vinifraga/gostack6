import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 25,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  author: {
    color: '#B2B2B2',
    marginBottom: 10,
  },
  description: {
    paddingTop: 15,
    borderTopColor: '#eee',
    borderTopWidth: 1,
    textAlign: 'justify',
  },
});

const Post = ({ post: { author, title, description } }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>{author}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
