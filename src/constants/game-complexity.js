import gameLevels from './game-levels';

export const gameComplexity = {
  [gameLevels.easy]: { values: 6, repetitions: 2, moves: 60 },
  [gameLevels.medium]: { values: 8, repetitions: 2, moves: 45 },
  [gameLevels.hard]: { values: 5, repetitions: 3, moves: 27 }
};