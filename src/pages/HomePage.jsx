import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { ContainerStyled } from 'components/common/ContainerStyled';

export const HomePage = () => {
  return (
    <>
      <AppBar />
      <ContainerStyled>
        <Outlet />
      </ContainerStyled>
    </>
  );
};
