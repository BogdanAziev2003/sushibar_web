import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../../pages/CartPage/Cart.module.scss';
import { addCount, minusCount, zeroCount } from '../../redux/countSlice';

const CountPribor = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((s) => s.count);

  useEffect(() => {
    return () => {
      dispatch(zeroCount());
    };
  }, [dispatch]);

  return (
    <div className={styles.order}>
      <div className={styles.count__text}>
        <p>Укажите количество приборов</p>
      </div>

      <div className={styles.count}>
        <div
          className={`${styles.count__button} ${styles.count__button__minus}`}
          onClick={() => dispatch(minusCount())}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.85046 6H6.14581H14.1471C15.1693 6 16 6.89664 16 8C16 9.10336 15.1693 10 14.1471 10H9.84921H6.14581H1.85046C0.828229 10 0 9.10336 0 8C0 6.89664 0.828229 6 1.85046 6Z"
              fill="#be0201"
            />
          </svg>
        </div>
        <div className={styles.count__number}>{count}</div>
        <div
          className={`${styles.count__button} ${styles.count__button__plus}`}
          onClick={() => dispatch(addCount())}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1471 6.1483H9.84921V1.85295C9.84921 0.830716 9.02099 0 7.99876 0C6.97653 0 6.14581 0.830716 6.14581 1.85295V6.1483H1.85046C0.828229 6.1483 0 6.97901 0 8.00124C0 9.02347 0.828229 9.85419 1.85046 9.85419H6.14581V14.1471C6.14581 15.1693 6.97653 16 7.99876 16C9.02099 16 9.84921 15.1693 9.84921 14.1471V9.85419H14.1471C15.1693 9.85419 16 9.02347 16 8.00124C16 6.97901 15.1693 6.1483 14.1471 6.1483Z"
              fill="#be0201"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CountPribor;
