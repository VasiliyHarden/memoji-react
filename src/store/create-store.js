import { createStore, combineReducers } from 'redux';
import { gameReducer } from './game';
import { modalsReducer } from './modals';

export default () => {
  const store = createStore(combineReducers({
    game: gameReducer,
    modals: modalsReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};