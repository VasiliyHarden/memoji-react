import { actionTypes } from "./action-types";

const initialState = {
  isOpen: false,
  modalType: null,
  props: null
};

const reducerMapping = {
  [actionTypes.OPEN_MODAL]: (state, { modalType, props }) => ({
    isOpen: true,
    modalType,
    props
  }),

  [actionTypes.CLOSE_MODAL]: () => ({
    isOpen: false,
    modalType: null,
    props: null
  }),
};

export const modalsReducer = (state = initialState, { type, ...payload }) => (
  reducerMapping[type] ? reducerMapping[type](state, payload) : state
);