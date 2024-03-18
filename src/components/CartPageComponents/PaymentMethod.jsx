import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../../pages/CartPage/Cart.module.scss';
import { setPayMethod } from '../../redux/paymentSlice';

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const { payMethod } = useSelector((state) => state.paymethod);

  const handleSetMethod = (type) => {
    dispatch(setPayMethod(type));
  };

  return (
    <div className={styles.method}>
      <div className={styles.method__text}>
        <p>Способ оплаты</p>
      </div>

      <div className={styles.method__list}>
        <div
          className={styles.method__el}
          onClick={() => handleSetMethod('cash')}
        >
          <div
            className={`${
              payMethod === 'cash' && styles.method__button__pressed
            } ${styles.method__button}`}
          >
            {payMethod === 'cash' && (
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.81295 7.24815C3.58895 7.24815 3.36495 7.16315 3.19395 6.99215L0.820953 4.61915C0.478953 4.27715 0.478953 3.72315 0.820953 3.38215C1.16295 3.04015 1.71595 3.03915 2.05795 3.38115L3.81295 5.13615L7.94095 1.00815C8.28295 0.666148 8.83595 0.666148 9.17795 1.00815C9.51995 1.35015 9.51995 1.90415 9.17795 2.24615L4.43195 6.99215C4.26095 7.16315 4.03695 7.24815 3.81295 7.24815Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
          <div>
            <p>Наличными</p>
          </div>
        </div>
        <div
          className={styles.method__el}
          onClick={() => handleSetMethod('card')}
        >
          <div
            className={`${
              payMethod === 'card' && styles.method__button__pressed
            } ${styles.method__button}`}
          >
            {payMethod === 'card' && (
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.81295 7.24815C3.58895 7.24815 3.36495 7.16315 3.19395 6.99215L0.820953 4.61915C0.478953 4.27715 0.478953 3.72315 0.820953 3.38215C1.16295 3.04015 1.71595 3.03915 2.05795 3.38115L3.81295 5.13615L7.94095 1.00815C8.28295 0.666148 8.83595 0.666148 9.17795 1.00815C9.51995 1.35015 9.51995 1.90415 9.17795 2.24615L4.43195 6.99215C4.26095 7.16315 4.03695 7.24815 3.81295 7.24815Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
          <div>
            <p>Переводом</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
