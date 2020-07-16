import React from 'react';
import { useDispatch } from 'react-redux';

import { faceImgSources } from '../../../../constants/face-img-sources';
import { gameInit } from '../../../../store/game';

import './Link.scss';

const Link = ({ level, picValue }) => {

  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(gameInit(level));
  }

  return (
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