import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTelegram } from '../../hooks/useTelegram';
import styles from './Cart.module.scss';
import Phone from '../../components/CartPageComponents/Phone';
import PaymentMethod from '../../components/CartPageComponents/PaymentMethod';
import DeliveryMethod from '../../components/CartPageComponents/DeliveryMethod';
import Comment from '../../components/CartPageComponents/Comment';
import CountPribor from '../../components/CartPageComponents/CountPribor';
import EmptyCart from '../../components/CartPageComponents/EmptyCart';
import ItemsInCart from '../../components/CartPageComponents/ItemsInCart';
import { setPhoneError, setAddressError } from '../../redux/errorsSlice';
import Promocod from '../../components/CartPageComponents/Promocod';

const CartPage = () => {
  const { tg } = useTelegram();
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state) => {
    const itemsCount = state.items.itemsInCart.reduce((acc, item) => {
      const existingItem = acc.find(
        (i) =>
          i.id === item.id &&
          i.price === item.price &&
          JSON.stringify(i.modifiers) === JSON.stringify(item.modifiers) &&
          JSON.stringify(i.modifiers) === JSON.stringify(item.modifiers) &&
          JSON.stringify(i?.changes) === JSON.stringify(item?.changes)
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        acc.push({ ...item, count: 1 });
      }
      return acc;
    }, []);

    return { itemsInCart: itemsCount };
  });
  const { phoneIsFalse, addressIsFalse } = useSelector((state) => state.errors);
  const { address, delMethod } = useSelector((state) => state.delmethod);
  const { itemsPrice, delPrice } = useSelector((state) => state.items);
  const { phone } = useSelector((state) => state.phone);
  const { payMethod } = useSelector((state) => state.paymethod);
  const { comment } = useSelector((state) => state.comment);
  const { count } = useSelector((state) => state.count);

  const onSendData = useCallback(() => {
    // Errors
    if (
      phoneIsFalse === null ||
      phoneIsFalse === true ||
      (delMethod === 'delivery' &&
        (addressIsFalse === null || addressIsFalse === true))
    ) {
      if (phoneIsFalse === null || phoneIsFalse === true) {
        dispatch(setPhoneError(true));
      }
      if (
        delMethod === 'delivery' &&
        (addressIsFalse === null || addressIsFalse === true)
      ) {
        dispatch(setAddressError(true));
      }
      return;
    }

    const data = {
      totalPrice: itemsPrice + delPrice,
      itemsPrice,
      delPrice,
      address,
      count,
      phone,
      delMethod,
      payMethod,
      comment,
      itemsInCart: itemsInCart.map((item) => {
        const newItem = {
          name: item.name,
          price: item.price,
          count: item.count,
        };
        // if (item?.modifiers.length > 1) {
        //   newItem.modifiers = item?.modifiers
        //     .filter((modifier) => modifier?.selected)
        //     .map((modifier) => ({
        //       name: modifier?.name,
        //     }));
        // } else if (
        //   item?.modifiers.length === 1 &&
        //   item?.modifiers[0] &&
        //   item?.modifier[0].selected
        // ) {
        //   newItem = item?.modifiers[0].name;
        // } else {
        //   delete item?.modifiers;
        // }
        if (item?.sizes?.length > 1) {
          newItem.sizes = item.sizes.find((size) => size.selected).name;
        }
        if (item?.changes[0]?.name) {
          newItem.changes = `${item.changes[0].name}: ${item.changes[0].items
            .filter((ch) => ch.selected)
            .map((ch) => ch.name)
            .join(', ')}`;
        }

        return newItem;
      }),
    };

    tg.sendData(JSON.stringify(data));
  }, [
    itemsPrice,
    address,
    phone,
    delMethod,
    payMethod,
    comment,
    itemsInCart,
    count,
  ]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData, tg]);

  return (
    <div className={styles.wrapper}>
      {itemsPrice === 0 ? (
        <EmptyCart />
      ) : (
        <ItemsInCart itemsInCart={itemsInCart} />
      )}

      <div className={styles.order__text}>
        <p>Оформление заказа</p>
      </div>
      {itemsInCart.some((i) => [0, 1, 2, 3, 4].includes(i.category)) && (
        <CountPribor />
      )}
      <Phone />
      <PaymentMethod />
      <DeliveryMethod />
      <Promocod />
      <Comment />
    </div>
  );
};

export default CartPage;
