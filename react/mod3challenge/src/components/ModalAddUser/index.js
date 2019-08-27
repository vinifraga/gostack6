import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { ModalStyles, ModalContent } from './styles';
import { Creators as UserActions } from '../../store/ducks/users';
import { Creators as ModalActions } from '../../store/ducks/modals';

Modal.setAppElement('#root');

class ModalAddUser extends Component {
  state = {
    userInput: '',
  };

  propTypes = {
    modals: PropTypes.shape({
      isModalOpen: PropTypes.bool.isRequired,
      lng: PropTypes.number.isRequired,
      lat: PropTypes.number.isRequired,
    }).isRequired,
    users: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    closeModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  handleAddUser = async (e) => {
    e.preventDefault();

    const {
      addUserRequest,
      modals: { lng, lat },
      users: { loading },
    } = this.props;
    const { userInput } = this.state;

    if (loading) return;

    addUserRequest(userInput, lng, lat);
    this.setState({ userInput: '' });
  };

  handleCloseModal = () => {
    const { closeModal } = this.props;

    closeModal();
    this.setState({ userInput: '' });
  };

  render() {
    const {
      modals: { isModalOpen },
      users: { loading },
    } = this.props;
    const { userInput } = this.state;
    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={this.handleCloseModal}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        style={ModalStyles}
        contentLabel="Adicionar Usuário"
      >
        <ModalContent>
          <strong>Adicionar novo usuário</strong>
          <form onSubmit={this.handleAddUser}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => {
                this.setState({ userInput: e.target.value });
              }}
              placeholder="Usuário no Github"
            />
            <div>
              <button id="cancel" type="button" onClick={this.handleCloseModal}>
                Cancelar
              </button>
              <button id="submit" type="submit">
                {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
              </button>
            </div>
          </form>
        </ModalContent>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modals: state.modals,
  users: state.users,
});

// eslint-disable-next-line max-len
const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalAddUser);
