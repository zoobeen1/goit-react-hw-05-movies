import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';

export const HomePage = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
