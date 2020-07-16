import { actionTypes } from './action-types';

export const openCard = (cardId) => ({
  type: actionTypes.OPEN_CARD,
  cardId
});

export const gameInit = (level) => ({
  type: actionTypes.GAME_INIT,
  level
});