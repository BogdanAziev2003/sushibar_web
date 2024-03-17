import React from 'react';

import styles from '../../pages/CartPage/Cart.module.scss';

const Comment = () => {
  return (
    <div className={styles.comment}>
      <div className="comment__text">
        <p>Введите коментарий к заказу</p>
      </div>
      <div className={styles.comment__icon}>
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
          />
        </svg>
      </div>
      <div className={styles.comment__text}>
        <textarea
          name=""
          placeholder="Укажите дополнительные пожелания или особенности вашего заказа здесь"
          maxLength="200"
        ></textarea>
      </div>
    </div>
  );
};

export default Comment;
