import React from 'react';

import imageRoll from '../../../image/image.png';

import styles from './Item.module.scss';

const Item = ({ ...item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={imageRoll} alt="No imageee" />
      </div>
      <div className={styles.item__wrapper}>
        <div className={styles.item__info}>
          <div className={styles.item__title}>
            <p>{item.name}</p>
            <div className={styles.item__gram}>
              <p>(250гр)</p>
            </div>
          </div>
          <div className={styles.item__containts}>
            <p>Лосось, сыр</p>
          </div>
          <div className={styles.item__price}>
            <p>290 ₽</p>
          </div>
        </div>
        <div className={styles.item__button}>
          <p>Добавить</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
