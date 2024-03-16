import React from 'react';

import styles from '../MainPage/MainPage.module.scss';
import Item from '../../components/MainPageComponents/Item';
import Search from '../../components/MainPageComponents/Search';
import Navbar from '../../components/MainPageComponents/Navbar';

const CategoryPage = ({ items }) => {
  return (
    <div className={styles.main}>
      <Search />
      <Navbar />
      <div className={styles.main__list}>
        {items.map((item, id) => (
          <Item key={id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
