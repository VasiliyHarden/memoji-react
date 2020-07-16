import {v4 as uuid} from 'uuid';
import { actionTypes } from "./action-types";
import { gameComplexity } from "../../constants/game-complexity";
import { generateValues } from "./utils/generate-values";
import { cardValues } from "../../constants/card-values";
import { cardStates } from "../../constants/card-states";
import { checkCardsEquality } from './utils/check-cards-equality';
import { gameOutcomes } from '../../constants/game-outcomes';

const initialState = {
  cards: {},
  cardsIds: [],
  activeCardsIds: [],
  moves: null,
  repetitions: null,
  values: null,
  level: null,
  score: 0,
  gameOutcome: null
};

const reducerMapping = {
  [actionTypes.GAME_INIT]: (state, { level }) => {
    const { values, repetitions, moves } = gameComplexity[level];
    const gameValues = generateValues(values, repetitions, cardValues);
    const cards = gameValues.map(value => ([uuid(), { 
      value, isOpen: false, state: cardStates.unknown 
    }]));
    return {
      ...initialState,
      cards: Object.fromEntries(cards),
      cardsIds: cards.map(card => card[0]),
      moves,
      repetitions,
      values,
      level
    };
  },

  [actionTypes.OPEN_CARD]: (state, { cardId }) => {
    if (state.gameOutcome) {
      return state;
    }

    const moves = state.moves - 1;
    let score = state.score;
    const cardsToChange = [{
      [cardId]: { ...state.cards[cardId], isOpen: true, state: cardStates.unknown }
    }];
    let activeCards = [...state.activeCards, cardId];

    if (activeCards.length === state.repetitions) {
      const isEqual = checkCardsEquality(activeCards);
      activeCards.forEach(id => {
        cardsToChange[id] = {
          ...state.cards[id], 
          isOpen: isEqual,
          state: isEqual ? cardStates.correct : cardStates.incorrect
        };
      });
      activeCards = [];
      if (isEqual) {
        score += state.repetitions;
      }
    }

    let gameOutcome = null;
    if (moves === 0) {
      gameOutcome = gameOutcomes.lose;
    }
    if (score === state.values * state.repetitions) {
      gameOutcome = gameOutcomes.win;
    }

    return {
      ...state,
      activeCards,
      cards: { ...state.cards, ...cardsToChange },
      moves,
      score,
      gameOutcome
    };
  }
};

export const gameReducer = (state = initialState, { type, ...payload }) => (
  reducerMapping[type] ? reducerMapping[type](state, payload) : state
);