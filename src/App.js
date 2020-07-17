import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Gamefield from './components/Gamefield/Gamefield';
import { Modal } from './components/Modals';
import { gameInit } from './store/game';
import { gameLevels } from './constants/game-levels';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameInit(gameLevels.easy));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Gamefield />
      <Modal />
    </>
  );
}

export default App;
