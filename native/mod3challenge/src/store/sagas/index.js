/* eslint-disable camelcase */
import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import api from '~/services/api';
import Toast from 'react-native-root-toast';

import { Creators as UserActions, Types as UserTypes } from '~/store/ducks/user';
import { Creators as ModalActions } from '~/store/ducks/modal';
import { colors } from '~/styles';

function* user(action) {
  const { username, latLng } = action.payload;

  try {
    const response = yield call(api.get, `/users/${username}`);
    const {
      id, login, name, avatar_url,
    } = response.data;
    yield put(UserActions.AddUserSuccess(id, latLng, login, name, avatar_url));
    Toast.show('Usuário Adicionado', {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      backgroundColor: colors.success,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  } catch (error) {
    yield put(UserActions.AddUserFailure());
    Toast.show('Usuário Inválido', {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      backgroundColor: colors.danger,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  } finally {
    yield put(ModalActions.ToggleModalSuccess(false));
  }
}

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.AddRequest, user)]);
}
