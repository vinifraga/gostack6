import { toast } from 'react-toastify';

export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  DEL_SUCCESS: 'users/DEL_SUCCESS',
};

const INITIAL_STATE = {
  error: null,
  loading: false,
  data: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      toast.success('Usuário adicionado com sucesso');
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      toast.error(action.payload.error);
      return { ...state, loading: false, error: action.payload.error };
    case Types.DEL_SUCCESS:
      toast.success('Usuário deletado com sucesso');
      return {
        loading: false,
        error: null,
        data: state.data.filter(user => user.id !== action.payload.userId),
      };
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: (user, lng, lat) => ({
    type: Types.ADD_REQUEST,
    payload: { user, lng, lat },
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
  delUserSuccess: userId => ({
    type: Types.DEL_SUCCESS,
    payload: { userId },
  }),
};
