import { call, select, put } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as UserActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modals';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, action.payload.user);
    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UserActions.addUserFailure('Usuário duplicado'));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        profile: data.html_url,
        lng: action.payload.lng,
        lat: action.payload.lat,
      };

      yield put(UserActions.addUserSuccess(userData));
    }
  } catch (error) {
    yield put(UserActions.addUserFailure('Usuário não encontrado'));
  } finally {
    yield put(ModalActions.closeModal());
  }
}
