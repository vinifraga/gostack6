export const Types = {
  OPEN: 'modals/OPEN',
  CLOSE: 'modals/CLOSE',
};

const INITIAL_STATE = {
  isModalOpen: false,
  lng: null,
  lat: null,
};

export default function modals(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return { isModalOpen: true, lng: action.payload.lng, lat: action.payload.lat };
    case Types.CLOSE:
      return { isModalOpen: false };
    default:
      return state;
  }
}

export const Creators = {
  openModal: (lng, lat) => ({
    type: Types.OPEN,
    payload: { lng, lat },
  }),
  closeModal: () => ({
    type: Types.CLOSE,
  }),
};
