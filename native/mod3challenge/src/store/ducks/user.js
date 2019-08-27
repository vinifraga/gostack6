// Types
export const Types = {
  AddRequest: 'ADD_USER_REQUEST',
  AddSuccess: 'ADD_USER_SUCCESS',
  AddFailure: 'ADD_USER_FAILURE',
};

// Actions
export const Creators = {
  AddUserRequest: (username, latLng) => ({
    type: Types.AddRequest,
    payload: {
      latLng,
      username,
    },
  }),

  AddUserSuccess: (id, latLng, title, subtitle, image) => ({
    type: Types.AddSuccess,
    payload: {
      id,
      latLng,
      title,
      subtitle,
      image,
    },
  }),

  AddUserFailure: () => ({
    type: Types.AddFailure,
  }),
};
// Reducers

const INITIAL_STATE = {
  username: null,
  error: false,
  loading: false,
  data: [],
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AddRequest:
      return { ...state, loading: true, error: false };
    case Types.AddSuccess:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, { ...action.payload }],
      };
    case Types.AddFailure:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
