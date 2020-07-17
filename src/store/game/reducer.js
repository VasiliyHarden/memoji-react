import {v4 as uuid} from 'uuid';

import { actionTypes } from "./action-types";
import { gameComplexity } from "../../constants/game-complexity";
import { cardValues } from "../../constants/card-values";
import { cardStates } from "../../constants/card-states";
import { generateValues } from "./utils/generate-values";
import { checkCardsEquality } from './utils/check-cards-equality';
import { findIncorrectAndClose } from './utils/find-incorrect-and-close';
import { checkGameOutcome } from './utils/check-game-outcome';

const initialState = {
  cards: {},
  cardsIds: [],
  activeCardsIds: [],
  moves: null,
  repetitions: null,
  level: null,
  pointsToWin: null,
  gameOutcome: null
};

const reducerMapping = {
  [actionTypes.GAME_INIT]: (state, { level }) => {
    const { values, repetitions, moves } = gameComplexity[level];
    const gameValues = generateValues(values, repetitions, cardValues);
    const cards = gameValues.map(value => [uuid(), { 
      value, isOpen: false, state: cardStates.unknown 
    }]);
    return {
      ...initialState,
      cards: Object.fromEntries(cards),
      cardsIds: cards.map(card => card[0]),
      pointsToWin: values * repetitions,
      moves,
      repetitions,
      level
    };
  },

  [actionTypes.OPEN_CARD]: (state, { cardId }) => {
    if (state.gameOutcome) {
      return state;
    }

    const cardsToChange = findIncorrectAndClose(state.cards);
    cardsToChange[cardId] = { 
      ...state.cards[cardId], isOpen: true
    };
    let activeCardsIds = [...state.activeCardsIds, cardId];

    const moves = state.moves - 1;
    let pointsToWin = state.pointsToWin;

    if (activeCardsIds.length === state.repetitions) {
      const isEqual = checkCardsEquality(activeCardsIds.map(id => state.cards[id]));
      activeCardsIds.forEach(id => {
        cardsToChange[id] = {
          ...state.cards[id],
          isOpen: true,
          state: isEqual ? cardStates.correct : cardStates.incorrect
        };
      });
      activeCardsIds = [];

      if (isEqual) {
        pointsToWin -= state.repetitions;
      }
    }

    const gameOutcome = checkGameOutcome(moves, pointsToWin);

    return {
      ...state,
      activeCardsIds,
      cards: { ...state.cards, ...cardsToChange },
      moves,
      pointsToWin,
      gameOutcome
    };
  }
};

export const gameReducer = (state = initialState, { type, ...payload }) => (
  reducerMapping[type] ? reducerMapping[type](state, payload) : state
);