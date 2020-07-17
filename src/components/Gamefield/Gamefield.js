import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../Card/Card';
import { getCardsIds, getLevel, getGameOutcome } from '../../store/game';
import { openModal } from '../../store/modals';
import { modalTypes } from '../../constants/modal-types';
import { messages } from '../../constants/messages';

import './Gamefield.scss';

const Gamefield = () => {

  const cardsIds = useSelector(getCardsIds);
  const level = useSelector(getLevel);
  const outcome = useSelector(getGameOutcome);

  const dispatch = useDispatch();
  useEffect(() => {
    if (outcome) {
      dispatch(openModal(modalTypes.notify, {
        ...messages[outcome],
        buttonLabel: 'Go ahead'
      }));
    }
  }, [outcome, dispatch]);

  return (
    <div className='gamefield-wrapper'>
      <div className={`gamefield gamefield--${level}`}>
        { cardsIds.map(id => <Card key={id} id={id} />) }
      </div>
    </div>
  );
};

export default Gamefield;