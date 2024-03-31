import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IMask from 'imask';

import styles from '../../pages/CartPage/Cart.module.scss';
import { setPhone } from '../../redux/phoneSlice';
import { setPhoneError } from '../../redux/errorsSlice';
import { useTelegram } from '../../hooks/useTelegram';

const Phone = () => {
  const dispatch = useDispatch();
  const { tg } = useTelegram();
  const { phone } = useSelector((state) => state.phone);
  const [phoneValue, setPhoneValue] = useState(phone);
  const phoneInputRef = useRef(null);
  const { phoneIsFalse, addressIsFalse } = useSelector((state) => state.errors);

  const handlerPhoneChange = (event) => {
    setPhoneValue(event.target.value);
  };

  useEffect(() => {
    if (phoneValue.length === 18) {
      dispatch(setPhone(phoneValue));
      dispatch(setPhoneError(false));
      phoneInputRef.current.blur();
    } else {
      dispatch(setPhoneError(null));
    }

    if (phoneInputRef.current) {
      const phoneMask = IMask(phoneInputRef.current, {
        mask: '+7 (000) 000-00-00',
      });
    }
  }, [phoneValue, dispatch]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', () => {
      if (phoneIsFalse) {
        phoneInputRef.current.focus();
      }
    });
    return () => {
      tg.offEvent('mainButtonClicked', () => {});
    };
  }, [tg]);

  return (
    <div className={styles.order}>
      <div className={styles.order__inner}>
        <div className={styles.phone}>
          <div className={styles.phone__text}>
            <p>
              Введите номер телефона <span className={styles.required}>*</span>
            </p>
          </div>
          <div className={styles.phone__input}>
            <input
              type="text"
              name="phone"
              id="phone"
              className={styles.input}
              placeholder="+7 (988) 831 99 00"
              value={phoneValue}
              onChange={handlerPhoneChange}
              ref={phoneInputRef}
              inputMode="numeric"
              onPaste={(e) => {
                e.preventDefault();
              }}
            />
            <div className={styles.phone__icon}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.20734 7.79524C9.70052 10.2877 10.2661 7.4042 11.8535 8.99051C13.3839 10.5205 14.2635 10.827 12.3245 12.7655C12.0816 12.9606 10.5385 15.3089 5.11538 9.88729C-0.308424 4.465 2.03849 2.92028 2.23373 2.67747C4.17742 0.733654 4.47866 1.61836 6.00906 3.14833C7.59648 4.73531 4.71416 5.30276 7.20734 7.79524Z"
                  fill="#be0201"
                />
              </svg>
            </div>
          </div>
          {phoneIsFalse && (
            <div className={styles.cart__error}>Введите номер телефона</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Phone;
