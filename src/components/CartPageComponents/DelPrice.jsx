import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from '../../pages/CartPage/Cart.module.scss';
import { setAddress, setDelPrice } from '../../redux/deliverySlice';
import { plusDelPrice } from '../../redux/itemsSlice';
const geolib = require('geolib');

const DelPrice = ({
  userAddress,
  userCoordinates,
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

  const areas = [
    {
      title: 'Район Рио',
      coordinates: [
        { latitude: 43.19134876939752, longitude: 44.52967899911244 },
        { latitude: 43.18865139535519, longitude: 44.52718833311928 },
        { latitude: 43.1861299551137, longitude: 44.52327362114415 },
        { latitude: 43.187777893253916, longitude: 44.518097086988476 },
        { latitude: 43.189353959253886, longitude: 44.5128009639666 },
        { latitude: 43.18923013610227, longitude: 44.50723718467949 },
        { latitude: 43.189810381933725, longitude: 44.506373607971724 },
        { latitude: 43.19441569783612, longitude: 44.50625180806174 },
        { latitude: 43.19611765805836, longitude: 44.507487173750974 },
        { latitude: 43.19917462711075, longitude: 44.50944969856921 },
        { latitude: 43.19826543322442, longitude: 44.51278190217281 },
        { latitude: 43.19728830281654, longitude: 44.51611551200759 },
        { latitude: 43.196004804558854, longitude: 44.52026762908693 },
        { latitude: 43.19514873463911, longitude: 44.52314858384719 },
        { latitude: 43.19402694713616, longitude: 44.52647381797284 },
        { latitude: 43.192586575838675, longitude: 44.52853640207563 },
      ],
      price: 100,
    },
    {
      title: 'Конный Двор',
      coordinates: [
        { latitude: 43.20485879705947, longitude: 44.49103849791493 },
        { latitude: 43.197223786422214, longitude: 44.48854043322732 },
        { latitude: 43.20081621774859, longitude: 44.489851965502524 },
        { latitude: 43.192883613232354, longitude: 44.50031244501825 },
        { latitude: 43.19396696926414, longitude: 44.50615076512773 },
        { latitude: 43.19619527614686, longitude: 44.50583505263393 },
        { latitude: 43.19880971045114, longitude: 44.50298505581269 },
        { latitude: 43.20123201101965, longitude: 44.500567771170495 },
        { latitude: 43.203261975287155, longitude: 44.49800550574644 },
      ],
      price: 170,
    },
  ];

  const selName = [
    {
      title: 'село Хумалаг',
      price: 250,
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
      price: 200,
    },
    {
      title: 'село Заманкул',
      price: 500,
    },
    {
      title: 'село Цалык',
      price: 400,
    },
    {
      title: 'село Коста',
      price: 300,
    },
    {
      title: 'село Дарг-Кох',
      price: 300,
    },
  ];

  useEffect(() => {
    if (userAddress && !userCoordinates) {
      selName.forEach((sel) => {
        if (userAddress.includes(sel.title)) {
          setDeliveryPrice(sel.price);
        }
      });
      setDeliveryPriceNotFound(false);
    } else if (
      userCoordinates &&
      userAddress &&
      userAddress.includes('Беслан')
    ) {
      if (userAddress.includes('-я Заводская')) {
        setDeliveryPrice(170);
        return;
      }

      const currentArea = areas.find((area) =>
        geolib.isPointInPolygon(userCoordinates, area.coordinates)
      );
      if (currentArea) {
        setDeliveryPrice(currentArea.price);
      } else {
        setDeliveryPrice(150);
      }
      setDeliveryPriceNotFound(false);
    } else {
      setDeliveryPriceNotFound('Не беслан');
      setDeliveryPrice(0);
    }
  }, [userAddress, userCoordinates]);

  return (
    <div className={styles.price__block}>
      {delPrice !== 0 && <>+{delPrice} ₽</>}
    </div>
  );
};

export default DelPrice;
