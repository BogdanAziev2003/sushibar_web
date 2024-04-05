import React from 'react';

import styles from '../pages/MainPage/MainPage.module.scss';

const ItemsNotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__title}>Ничего не найдено</div>
    </div>
  );
};

export default ItemsNotFound;
