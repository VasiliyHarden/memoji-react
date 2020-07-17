import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { concreteModals } from '../index';
import { closeModal } from "../../../store/modals";
import { getModalState } from "../../../store/modals/selectors";

import './Modal.scss';

const Modal = () => {

  const { isOpen, modalType, props } = useSelector(getModalState, shallowEqual);

  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(closeModal());
  };

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.classList.add('freeze');
    } else {
      document.body.classList.remove('freeze');
    }
  }, [isOpen]);

  const ConcreteModal = concreteModals[modalType];
  return (
    <div className={`modal-wrapper ${ isOpen ? '' : 'hidden'}`}>
      <div className='modal-container'>
        <div 
          className='modal-overlay'
          onClick={ closeHandler }
        />
        <div className='modal'>
          {
            isOpen && 
            <ConcreteModal 
              {...props}
              closeHandler={ closeHandler }
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Modal;