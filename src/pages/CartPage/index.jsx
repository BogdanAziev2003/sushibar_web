import React from 'react';

import styles from './Cart.module.scss';
import Phone from '../../components/CartPageComponents/Phone';
import PaymentMethod from '../../components/CartPageComponents/PaymentMethod';
import DeliveryMethod from '../../components/CartPageComponents/DeliveryMethod';
import Comment from '../../components/CartPageComponents/Comment';
import CountPribor from '../../components/CartPageComponents/CountPribor';
import EmptyCart from '../../components/CartPageComponents/EmptyCart';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const { totalPrice } = useSelector((s) => s.items);

  return (
    <div className={styles.wrapper}>
      {totalPrice === 0 ? <EmptyCart /> : <></>}

      <div className={styles.order__text}>
        <p>Оформление заказа</p>
      </div>

      <CountPribor />
      <Phone />
      <PaymentMethod />
      <DeliveryMethod />
      <Comment />
    </div>
  );
};

export default CartPage;
