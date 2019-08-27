import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

class Main extends Component {
  state = {
    repositoryInput: '',
  };

  static propTypes = {
    favorites: PropTypes.shape({
      error: PropTypes.oneOf([null, PropTypes.string]),
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
  };

  handleAddRepository = (event) => {
    event.preventDefault();
    const { addFavoriteRequest } = this.props;
    const { repositoryInput } = this.state;

    addFavoriteRequest(repositoryInput);
    this.setState({ repositoryInput: '' });
  };

  render() {
    const { repositoryInput } = this.state;
    const {
      favorites: { data, loading, error },
    } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>

          {loading && <span>Carregando...</span>}

          {!!error && <span style={{ color: '#F00' }}>{error}</span>}
        </form>

        <ul>
          {data.map(({
            name, description, id, url,
          }) => (
            <li key={id}>
              <p>
                <strong>{name}</strong> ({description})
              </p>
              <a href={url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
