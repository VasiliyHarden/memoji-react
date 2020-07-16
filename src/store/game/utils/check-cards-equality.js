export const checkCardsEquality = (cards) => {
  if (cards) {
    return cards.every(card => card.value === cards[0].value);
  }
  return true;
};