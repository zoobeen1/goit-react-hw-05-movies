import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

function Movies() {
  return (
    <Suspense fallback={<div>Error</div>}>
      <Outlet />
    </Suspense>
  );
}
export default Movies;
