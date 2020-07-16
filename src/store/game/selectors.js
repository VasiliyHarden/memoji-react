export const getCardsIds = state => Object.keys(state.game.cardIds);

export const getGameInfo = state => ({ 
  moves: state.game.moves, 
  level: state.game.level, 
  repetitions: state.game.repetitions 
});

export const getLevel = state => state.game.level;

export const getCard = (state, id) => state.game.cards[id];