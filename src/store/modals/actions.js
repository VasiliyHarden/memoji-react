import { actionTypes } from "./action-types";

export const openModal = (modalType, props) => ({
  type: actionTypes.OPEN_MODAL,
  modalType,
  props
});

export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL
});