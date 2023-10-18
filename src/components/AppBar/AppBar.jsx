import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBarStyled } from './AppBarStyled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <AppBarStyled>
      {navItems.map(({ href, text }) => (
        <NavLink to={href} key={href}>
          {text}
        </NavLink>
      ))}
    </AppBarStyled>
  );
};
export default AppBar;
