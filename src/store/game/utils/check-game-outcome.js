import { gameOutcomes } from "../../../constants/game-outcomes";

export const checkGameOutcome = (moves, pointsToWin) => {
  let gameOutcome = null;
  if (moves === 0) {
    gameOutcome = gameOutcomes.lose;
  }
  if (pointsToWin === 0) {
    gameOutcome = gameOutcomes.win;
  }
  return gameOutcome;
};