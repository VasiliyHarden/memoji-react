import { cardStates } from "../../../constants/card-states";

// pure function
export const findIncorrectAndClose = (cards) => {
  const cardsToClose = {};
  Object.keys(cards).forEach(id => {
    if (cards[id].state === cardStates.incorrect) {
      cardsToClose[id] = { 
        ...cards[id], state: cardStates.unknown, isOpen: false 
      };
    }
  });
  return cardsToClose;
};