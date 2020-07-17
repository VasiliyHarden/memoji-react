import React from 'react';

import Link from './components/Link/Link';
import NavbarInfo from './components/NavbarInfo/NavbarInfo';
import { gameLevels } from '../../constants/game-levels';
import { cardValues } from '../../constants/card-values';

import './Navbar.scss';

const Navbar = () => {

  const links = [
    { level: gameLevels.easy, picValue: cardValues.rabbit },
    { level: gameLevels.medium, picValue: cardValues.fox },
    { level: gameLevels.hard, picValue: cardValues.octopus }
  ];

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
        <NavbarInfo />
      </div>
    </nav>
  );
};

export default Navbar;