import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from '../../pages/MainPage/MainPage.module.scss';
import Header from '../Header';
import Navbar from '../../components/MainPageComponents/Navbar';
import Search from '../../components/MainPageComponents/Search';
import Loading from './Loading';

const Layout = () => {
  const { pathname } = useLocation();
  const { isLoading } = useSelector((s) => s.items);
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

        {isLoading ? <Loading /> : <Outlet />}
      </div>
    </main>
  );
};

export default Layout;
