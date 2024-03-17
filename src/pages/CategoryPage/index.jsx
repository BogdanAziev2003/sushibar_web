import React from 'react';

import styles from '../MainPage/MainPage.module.scss';
import Item from '../../components/MainPageComponents/Item';
import ItemsNotFound from '../../components/ItemsNotFound';

const CategoryPage = ({ items }) => {
  return (
    <div className={styles.main}>
      {items.length ? (
        <div className={styles.main__list}>
          {items.map((item, id) => (
            <Item key={id} {...item} />
          ))}
        </div>
      ) : (
        <ItemsNotFound />
      )}
    </div>
  );
};

export default CategoryPage;
