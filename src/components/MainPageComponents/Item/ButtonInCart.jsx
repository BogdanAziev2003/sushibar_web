import React from 'react';

import styles from './Item.module.scss';

const ButtonInCart = ({
  itemList,
  removeItemInCart,
  item,
  handleModalOpen,
}) => {
  return (
    <div className={`${styles.item__button} ${styles.item__button_count}`}>
      <div
        className={styles.item__button__minus}
        onClick={() => removeItemInCart(item)}
      >
        <svg
          width="17"
          height="4"
          viewBox="0 0 17 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.35046 0H6.64581H14.6471C15.6693 0 16.5 0.896644 16.5 2C16.5 3.10336 15.6693 4 14.6471 4H10.3492H6.64581H2.35046C1.32823 4 0.5 3.10336 0.5 2C0.5 0.896644 1.32823 0 2.35046 0Z"
            fill="#be0201"
          ></path>
        </svg>
      </div>
      <div className={styles.item__count}>
        <p>{itemList.length}</p>
      </div>
      <div
        onClick={() => handleModalOpen(item)}
        className={styles.item__button__plus}
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6471 6.1483H10.3492V1.85295C10.3492 0.830716 9.52099 0 8.49876 0C7.47653 0 6.64581 0.830716 6.64581 1.85295V6.1483H2.35046C1.32823 6.1483 0.5 6.97901 0.5 8.00124C0.5 9.02347 1.32823 9.85419 2.35046 9.85419H6.64581V14.1471C6.64581 15.1693 7.47653 16 8.49876 16C9.52099 16 10.3492 15.1693 10.3492 14.1471V9.85419H14.6471C15.6693 9.85419 16.5 9.02347 16.5 8.00124C16.5 6.97901 15.6693 6.1483 14.6471 6.1483Z"
            fill="#be0201"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ButtonInCart;
