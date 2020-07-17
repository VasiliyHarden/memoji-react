import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { getGameInfo } from '../../../../store/game';

import './NavbarInfo.scss';

const NavbarInfo = () => {

  const { moves, level, repetitions } = useSelector(getGameInfo, shallowEqual);

  return (
    <>
      <p className='navbar__info'>
        Current game level: <span className='navbar__info--highlight'>{ level }</span>
      </p>
      <p className='navbar__info'>
        Moves left: <span className='navbar__info--highlight'>{moves}</span>
      </p>
      <p className='navbar__info'>
        Pick <span className='navbar__info--highlight'>{repetitions}</span> cards of the same animal to advance
      </p>
    </>
  )
};

export default NavbarInfo;