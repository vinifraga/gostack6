import React, { Component } from 'react';

import { Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RepositoriesActions } from '~/store/ducks/repositories';
import PropTypes from 'prop-types';

import { Container } from './styles';

class Repositories extends Component {
  static propTypes = {
    repositories: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
    loadRepositoriesRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;

    loadRepositoriesRequest();
  }

  render() {
    const { repositories } = this.props;

    return (
      <Container>
        {repositories.loading ? (
          <ActivityIndicator size="small" color="#999" />
        ) : (
          repositories.data.map(repo => <Text key={repo.id}>{repo.name}</Text>)
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch);

const mapStateToProps = state => ({
  repositories: state.repositories,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
