import React from 'react';
import { useDispatch } from 'react-redux';

import { faceImgSources } from '../../../../constants/face-img-sources';
import { gameInit } from '../../../../store/game';
import { openModal, closeModal } from '../../../../store/modals';
import { modalTypes } from '../../../../constants/modal-types';
import { messages } from '../../../../constants/messages';

import './Link.scss';

const Link = ({ level, picValue }) => {

  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(openModal(modalTypes.confirm, {
      ...messages.confirm,
      submitHandler: () => {
        dispatch(gameInit(level))
        dispatch(closeModal());
      }
    }));
  };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className='navbar__link' onClick={ clickHandler }>
      <img 
        src={ faceImgSources[picValue] } 
        alt={ picValue } 
        className='navbar__img' 
      />
      { level }
    </a>
  );
}

export default Link;