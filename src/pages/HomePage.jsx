import React, { Suspense } from 'react';
import { Loader } from 'components/Loader';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { ContainerStyled } from 'components/common/ContainerStyled';

const HomePage = () => {
  return (
    <>
      <AppBar />
      <ContainerStyled>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ContainerStyled>
    </>
  );
};

export default HomePage;
