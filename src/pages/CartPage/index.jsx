import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Cart.module.scss';
import Phone from '../../components/CartPageComponents/Phone';
import PaymentMethod from '../../components/CartPageComponents/PaymentMethod';
import DeliveryMethod from '../../components/CartPageComponents/DeliveryMethod';
import Comment from '../../components/CartPageComponents/Comment';
import CountPribor from '../../components/CartPageComponents/CountPribor';
import EmptyCart from '../../components/CartPageComponents/EmptyCart';
import ItemsInCart from '../../components/CartPageComponents/ItemsInCart';

const CartPage = () => {
  const { totalPrice } = useSelector((s) => s.items);
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
