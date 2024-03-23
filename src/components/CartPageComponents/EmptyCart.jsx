import React from 'react';

import styles from '../../pages/CartPage/Cart.module.scss';
import cartImage from '../../image/empty-cart-test-1.png';

const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <img src={cartImage} alt="empty-cart" width="150px" />
    </div>
  );
};

export default EmptyCart;
