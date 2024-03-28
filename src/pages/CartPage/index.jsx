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
  const { totalPrice, delPrice } = useSelector((state) => state.items);
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
      totalPrice: totalPrice,
      cartPrice: totalPrice - delPrice,
      delPrice,
      address: address,
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
        if (item?.changes[0].name) {
          newItem.changes = item.changes
            .map((chs) => {
              return `${chs.name}: ${chs.items.find((ch) => ch.selected).name}`;
            })
            .flat();
        }

        return newItem;
      }),
    };

    tg.sendData(JSON.stringify(data));
  }, [
    totalPrice,
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
      {totalPrice === 0 ? (
        <EmptyCart />
      ) : (
        <ItemsInCart itemsInCart={itemsInCart} totalPrice={totalPrice} />
      )}

      <div className={styles.order__text}>
        <p>Оформление заказа</p>
      </div>

      {itemsInCart.find(
        (i) =>
          i.category === 0 ||
          i.category === 1 ||
          i.category === 2 ||
          i.category === 3 ||
          i.category === 4
      ) && <CountPribor />}
      <Phone />
      <PaymentMethod />
      <DeliveryMethod />
      <Comment />
    </div>
  );
};

export default CartPage;
