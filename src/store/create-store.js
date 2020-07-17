import { createStore, combineReducers } from 'redux';
import { gameReducer } from './game';

export default () => {
  const store = createStore(combineReducers({
    game: gameReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}