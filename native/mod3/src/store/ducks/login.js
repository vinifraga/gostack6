// TYPES

export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
};

// ACTIONS
export const Creators = {
  loginSuccess: username => ({
    type: Types.SUCCESS,
    payload: { username },
  }),

  loginFailure: () => ({
    type: Types.FAILURE,
  }),

  loginRequest: username => ({
    type: Types.REQUEST,
    payload: { username },
  }),
};

// REDUCERS

const INITIAL_STATE = {
  username: null,
  error: false,
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SUCCESS:
      return {
        ...state,
        loading: false,
        username: action.payload.username,
        error: false,
      };
    case Types.FAILURE:
      return { ...state, loading: false, error: true };
    case Types.REQUEST:
      return { ...state, loading: true };
    default:
      return state;
  }
}
