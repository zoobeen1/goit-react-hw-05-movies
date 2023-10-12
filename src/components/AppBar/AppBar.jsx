import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBarStyled } from './AppBarStyled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
  { href: '/movies/:movieId', text: 'MovieDetails' },
  { href: '/movies/:movieId/cast', text: 'Cast' },
  { href: '/movies/:movieId/reviews', text: 'Reviews' },
];

export const AppBar = () => {
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
