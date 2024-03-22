import React from 'react';

import styles from './Layout.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <p className={styles.loading__text}>Загрузка...</p>
    </div>
  );
};

export default Loading;
