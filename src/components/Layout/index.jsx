import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from '../../pages/MainPage/MainPage.module.scss';
import loadingSkeleton from './Layout.module.scss';
import Header from '../Header';
import Navbar from '../../components/MainPageComponents/Navbar';
import Search from '../../components/MainPageComponents/Search';
import { Skeleton } from './Skeleton';

const Layout = () => {
  const { pathname } = useLocation();
  const { isLoading } = useSelector((s) => s.items);
  const skeletons = [...new Array(5)].map((_, index) => (
    <Skeleton className={loadingSkeleton.skeleton} key={index} />
  ));
  return (
    <main>
      <div className="wrapper">
        <Header />

        {pathname !== '/cart' && (
          <>
            <div className={styles.main}>
              <Search />
            </div>
            <Navbar />
          </>
        )}

        {isLoading ? (
          <div className={loadingSkeleton.skeleton__wrapper}>{skeletons}</div>
        ) : (
          <Outlet />
        )}
      </div>
    </main>
  );
};

export default Layout;
