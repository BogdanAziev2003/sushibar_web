import React, { useState } from 'react';
import styles from '../../pages/CartPage/Cart.module.scss';

const Promocod = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value.toUpperCase());
  };

  return (
    <div className={styles.order}>
      <div className={styles.order__inner}>
        <div className={styles.promocod}>
          <div className={styles.promocod__text}>
            <p>Введите промокод (при наличии)</p>
          </div>
          <div className={styles.promocod__input}>
            <input
              type="text"
              name="phone"
              id="phone"
              maxLength={12}
              className={styles.input}
              value={value}
              onInput={handleInputChange}
            />
            <div className={styles.promocod__icon}>
              <svg
                className="w-6 h-6 text-red-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
            </div>
            <button className={styles.button}>Подтвердить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promocod;
