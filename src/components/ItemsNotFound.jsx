import React from 'react';

import styles from '../pages/MainPage/MainPage.module.scss';

const ItemsNotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__title}>
        Блюдо отсуствует, либо неверное название
      </div>
    </div>
  );
};

export default ItemsNotFound;
