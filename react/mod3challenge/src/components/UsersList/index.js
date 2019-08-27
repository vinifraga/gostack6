import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Container, List } from './styles';
import { Creators as UserActions } from '../../store/ducks/users';

const handleDeleteUser = (del, id) => {
  del(id);
};

const UsersList = ({ users: { data }, delUserSuccess }) => (
  <Container>
    <List>
      {data.length < 1 ? (
        <div id="vazio">Nenhum usuário adicionado</div>
      ) : (
        data.map(user => (
          <li key={user.id}>
            <div id="info">
              <img src={user.avatar} alt="avatar" />
              <div>
                <strong>{user.name}</strong>
                <span>{user.login}</span>
              </div>
            </div>
            <div id="icons">
              <i
                className="fa fa-times-circle"
                id="close"
                role="button"
                tabIndex="0"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleDeleteUser(delUserSuccess, user.id);
                  }
                }}
                onClick={() => handleDeleteUser(delUserSuccess, user.id)}
              />
              <i
                className="fa fa-chevron-right"
                id="more"
                role="button"
                tabIndex="0"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = user.profile;
                  }
                }}
                onClick={() => {
                  window.location.href = user.profile;
                }}
              />
            </div>
          </li>
        ))
      )}
    </List>
  </Container>
);

UsersList.propTypes = {
  users: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        profile: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  delUserSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);
