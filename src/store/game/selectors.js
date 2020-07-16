export const getCardIds = state => Object.keys(state.game.cardIds);

export const getGameInfo = state => ({ 
  moves: state.game.moves, 
  level: state.game.level, 
  repetitions: state.game.repetitions 
});

export const getCard = (state, id) => state.game.cards[id];