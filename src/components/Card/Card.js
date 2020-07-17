import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getCard, openCard } from '../../store/game';
import { faceImgSources } from '../../constants/face-img-sources';

import './Card.scss';

const Card = ({ id }) => {
  
  const { isOpen, value, state } = useSelector(state => getCard(state, id), shallowEqual);

  const dispatch = useDispatch();
  const clickHandler = () => {
    if (!isOpen) {
      dispatch(openCard(id));
    }
  };

  return (
    <div className='card-wrapper'>
      <div className={ `card ${isOpen ? 'card--open' : ''}`} onClick={ clickHandler }>
        <div className={ `card__face card__face--${state}` }>
          <img src={ faceImgSources[value] } alt={ `${value}` } />
        </div>
        <div className="card__shirt" />
      </div>	
    </div>
  );
}

export default Card;