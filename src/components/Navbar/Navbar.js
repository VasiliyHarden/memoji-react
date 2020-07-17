import React from 'react';
import { useSelector } from 'react-redux';

import Link from './components/Link/Link';
import { gameLevels } from '../../constants/game-levels';
import { cardValues } from '../../constants/card-values';
import { getGameInfo } from '../../store/game';

import './Navbar.scss';

const Navbar = () => {

  const links = [
    { level: gameLevels.easy, picValue: cardValues.rabbit },
    { level: gameLevels.medium, picValue: cardValues.fox },
    { level: gameLevels.hard, picValue: cardValues.octopus }
  ];

  const { moves, level, repetitions } = useSelector(getGameInfo);

  return (
    <nav className='navbar'>
      <div className='navbar__inner'>
        <h1 className='navbar__header'>Memoji</h1>
        <ul className='navbar__list'>
          {
            links.map(link => (
              <li className='navbar__list-item' key={ link.level }>
                <Link {...link} />
              </li>
            ))
          }
        </ul>
        <p className='navbar__info'>
          Current game level: <span className='navbar__info--highlight'>{ level }</span>
        </p>
        <p className='navbar__info'>
          Moves left: <span className='navbar__info--highlight'>{moves}</span>
        </p>
        <p className='navbar__info'>
          Pick <span className='navbar__info--highlight'>{repetitions}</span> cards of the same animal to advance
        </p>
      </div>
    </nav>
  );
};

export default Navbar;