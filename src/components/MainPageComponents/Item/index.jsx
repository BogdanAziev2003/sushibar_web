import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../../redux/itemsSlice';
import imageRoll from '../../../image/image.png';
import styles from './Item.module.scss';
import ModalWindow from '../../ModalWindow';

const Item = ({ ...item }) => {
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state) => state.items);

  const [open, setOpen] = useState(false);

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
              <p>(250{item?.quantity_type})</p>
            </div>
          </div>
          <div className={styles.item__containts}>
            <p>Лосось, сыр</p>
          </div>
          <div className={styles.item__price}>
            <p>{item.price} ₽</p>
          </div>
        </div>
        <div className={styles.item__button}>
          <p>Добавить</p>
        </div>
      </div>

      {open && <ModalWindow open={open} setOpen={setOpen} item={item} />}
    </div>
  );
};

export default Item;
