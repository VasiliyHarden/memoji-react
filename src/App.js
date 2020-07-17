import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Gamefield from './components/Gamefield/Gamefield';
import { Modal } from './components/Modals';

function App() {
  return (
    <>
      <Navbar />
      <Gamefield />
      <Modal />
    </>
  );
}

export default App;
