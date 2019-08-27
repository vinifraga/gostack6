import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container,
  ModalBox,
  UserInput,
  DivButtons,
  CancelButton,
  ConfirmButton,
  ButtonText,
} from './styles';
import { Creators as UserActions } from '~/store/ducks/user';
import { Creators as ModalActions } from '~/store/ducks/modal';

class ModalExample extends Component {
  state = {
    userInput: '',
  };

  handleAddUser = () => {
    const {
      AddUserRequest,
      modal: { latLng },
    } = this.props;
    const { userInput } = this.state;
    AddUserRequest(userInput, latLng);
    this.setState({ userInput: '' });
  };

  render() {
    const { userInput } = this.state;
    const {
      modal: { modalVisible },
      users: { loading },
      ToggleModalSuccess,
    } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => ToggleModalSuccess(false)}
      >
        <Container>
          <ModalBox>
            <Text>Adicionar novo Usuário</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <UserInput
                placeholder="Usuário no Github"
                autoCapitalize="none"
                value={userInput}
                autoCorrect={false}
                onChangeText={text => this.setState({ userInput: text })}
                onSubmitEditing={this.handleAddUser}
              />
            </View>
            <DivButtons>
              <CancelButton onPress={() => ToggleModalSuccess(false)}>
                <ButtonText>Cancelar</ButtonText>
              </CancelButton>
              <ConfirmButton onPress={this.handleAddUser}>
                <ButtonText>{loading ? 'Carregando...' : 'Salvar'}</ButtonText>
              </ConfirmButton>
            </DivButtons>
          </ModalBox>
        </Container>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  users: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, ...ModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalExample);
