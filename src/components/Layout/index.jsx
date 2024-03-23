import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useTelegram } from '../../hooks/useTelegram';
import styles from '../../pages/MainPage/MainPage.module.scss';
import loadingSkeleton from './Layout.module.scss';
import Header from '../Header';
import Navbar from '../../components/MainPageComponents/Navbar';
import Search from '../../components/MainPageComponents/Search';
import { Skeleton } from './Skeleton';

const Layout = () => {
  const { pathname } = useLocation();
  const { isLoading } = useSelector((s) => s.items);
  const { open } = useSelector((s) => s.blur);

  const { totalPrice } = useSelector((state) => state.items);
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const mainButtonClick = () => {
    if (tg.MainButton.text === `Мой заказ: ${totalPrice} ₽`) navigate('/cart');
  };
  Telegram.WebApp.onEvent('mainButtonClicked', mainButtonClick);

  const skeletons = [...new Array(5)].map((_, index) => (
    <Skeleton className={loadingSkeleton.skeleton} key={index} />
  ));
  return (
    <main>
      <div className={`wrapper ${open && 'blur'}`}>
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
