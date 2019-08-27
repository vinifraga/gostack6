import React, { Component } from 'react';

import moment from 'moment';
import logo from '../../assets/logo.png';

import api from '../../services/api';
import { Form, Container } from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  async componentDidMount() {
    this.setState({ repositories: await this.getLocalRepositories() });
  }

  getLocalRepositories = async () => JSON.parse(await localStorage.getItem('repos')) || [];

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { repositoryInput, repositories } = this.state;
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();
      repositories.push(repository);

      await localStorage.setItem('repos', JSON.stringify(repositories));
      this.setState({
        repositoryError: false,
        repositoryInput: '',
        repositories,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleUpdateRepository = async (index) => {
    const { repositories } = this.state;
    const { data: repository } = await api.get(`/repos/${repositories[index].full_name}`);

    repository.lastCommit = moment(repository.pushed_at).fromNow();
    repositories.splice(index, 1, repository);

    await localStorage.setItem('repos', JSON.stringify(repositories));
    this.setState({ repositories });
  };

  handleDeleteRepository = async (index) => {
    const { repositories } = this.state;

    repositories.splice(index, 1);

    await localStorage.setItem('repos', JSON.stringify(repositories));
    this.setState({ repositories });
  };

  render() {
    const {
      loading, repositoryInput, repositoryError, repositories,
    } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
        </Form>

        <CompareList
          repositories={repositories}
          delete={this.handleDeleteRepository}
          update={this.handleUpdateRepository}
        />
      </Container>
    );
  }
}
