import React from 'react';
import { useSelector } from 'react-redux';

import { getCardsIds, getLevel } from '../../store/game';
import Card from '../Card/Card';

import './Gamefield.scss';

const Gamefield = () => {

  const cardsIds = useSelector(getCardsIds);
  const level = useSelector(getLevel);

  return (
    <div className={`gamefield gamefield--${level}`}>
      { cardsIds.map(id => <Card key={id} id={id} />) }
    </div>
  );
};

export default Gamefield;