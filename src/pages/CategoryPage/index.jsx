import React from 'react';

import styles from '../MainPage/MainPage.module.scss';
import Item from '../../components/MainPageComponents/Item';

const CategoryPage = ({ items }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__list}>
        {items.map((item, id) => (
          <Item key={id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
