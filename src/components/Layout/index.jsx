import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';

const Layout = () => {
  return (
    <main>
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
