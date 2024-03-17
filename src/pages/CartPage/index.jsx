import React from 'react';

import styles from './Cart.module.scss';
import Phone from '../../components/CartPageComponents/Phone';
import PaymentMethod from '../../components/CartPageComponents/PaymentMethod';
import DeliveryMethod from '../../components/CartPageComponents/DeliveryMethod';
import Comment from '../../components/CartPageComponents/Comment';
import CountPribor from '../../components/CartPageComponents/CountPribor';

const CartPage = () => {
  return (
    <div className={styles.wrapper}>
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
