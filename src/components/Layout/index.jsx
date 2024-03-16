import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import styles from '../../pages/MainPage/MainPage.module.scss';
import Header from '../Header';
import Navbar from '../../components/MainPageComponents/Navbar';
import Search from '../../components/MainPageComponents/Search';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <main>
      <div className="wrapper">
        <Header />

        {pathname !== '/cart' && (
          <div className={styles.main}>
            <Search />
            <Navbar />
          </div>
        )}

        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
