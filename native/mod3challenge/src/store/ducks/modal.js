// Types
export const Types = {
  ToggleSuccess: 'TOGGLE_MODAL_SUCCESS',
};

// Actions
export const Creators = {
  ToggleModalSuccess: (modalVisible, latLng) => ({
    type: Types.ToggleSuccess,
    payload: { modalVisible, latLng },
  }),
};
// Reducers

const INITIAL_STATE = {
  modalVisible: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ToggleSuccess:
      return { modalVisible: action.payload.modalVisible, latLng: action.payload.latLng };
    default:
      return state;
  }
}
