import React from 'react';

import styles from '../MainPage/MainPage.module.scss';
import Item from '../../components/MainPageComponents/Item';
import ItemsNotFound from '../../components/ItemsNotFound';

const CategoryPage = ({ items, filteredItems, value }) => {
  if (value) {
    return (
      <div className={styles.main}>
        {filteredItems.length ? (
          <div className={styles.main__list}>
            {filteredItems.map((item, id) => (
              <Item key={id} {...item} />
            ))}
          </div>
        ) : (
          <ItemsNotFound />
        )}
      </div>
    );
  }

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
