import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from '../../pages/CartPage/Cart.module.scss';
import { setAddress, setDelPrice } from '../../redux/deliverySlice';
import { plusDelPrice } from '../../redux/itemsSlice';
const geolib = require('geolib');

const DelPrice = ({
  userAddress,
  deliveryPrice,
  setDeliveryPrice,
  delPrice,
  setDeliveryPriceNotFound,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDelPrice(deliveryPrice));
    dispatch(setAddress(userAddress));
    dispatch(plusDelPrice(deliveryPrice));
  }, [deliveryPrice, userAddress]);

  const selName = [
    {
      title: 'село Брут',
      price: 270,
    },
    {
      title: 'село Новый Батако',
      price: 200,
    },
    {
      title: 'село Зильги',
      price: 200,
    },
    {
      title: 'село Фарн',
      price: 150,
    },
    {
      title: 'село Заманкул',
      price: 450,
    },
    {
      title: 'село Цалык',
      price: 330,
    },
    {
      title: 'село Коста',
      price: 200,
    },
    {
      title: 'село Дарг-Кох',
      price: 350,
    },
    {
      title: 'село Ольгинское',
      price: 350,
    },
    {
      title: 'село Хумалаг',
      price: 250,
    },
  ];

  useEffect(() => {
    if (userAddress) {
      if (userAddress.includes('г Беслан')) {
        setDeliveryPrice(120);
      } else if (userAddress.includes('село Михайловское')) {
        setDeliveryPrice(350);
      } else {
        selName.forEach((sel) => {
          if (userAddress.includes(sel.title)) {
            setDeliveryPrice(sel.price);
          }
        });
      }
      setDeliveryPriceNotFound(false);
    }
  }, [userAddress]);

  return (
    <div className={styles.price__block}>
      {delPrice !== 0 && <>+{delPrice} ₽</>}
    </div>
  );
};

export default DelPrice;
