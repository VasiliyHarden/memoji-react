import Modal from './Modal/Modal';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import NotifyModal from './NotifyModal/NotifyModal';
import { modalTypes } from '../../constants/modal-types';

const concreteModals = {
    [modalTypes.confirm]: ConfirmModal,
    [modalTypes.notify]: NotifyModal
};

export { concreteModals, Modal };
