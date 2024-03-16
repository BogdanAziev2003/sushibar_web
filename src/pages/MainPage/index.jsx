import React from 'react';

import styles from './MainPage.module.scss';
import Navbar from '../../components/MainPageComponents/Navbar';
import Search from '../../components/MainPageComponents/Search';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <Search />
      <Navbar />
    </div>
  );
};

export default MainPage;
