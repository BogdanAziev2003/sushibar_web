import React from 'react';
import styles from '../../pages/CartPage/Cart.module.scss';

import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/itemsSlice';

const ClearCart = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.clear}>
      <div
        className={styles.clear__inner}
        onClick={() => dispatch(clearCart())}
      >
        <div className="clear__ico">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6433 9.52468C19.6433 9.59293 19.1104 16.3595 18.806 19.2072C18.6154 20.9548 17.493 22.0148 15.8095 22.0449C14.516 22.074 13.2498 22.0841 12.0039 22.0841C10.6813 22.0841 9.38778 22.074 8.13221 22.0449C6.50513 22.0058 5.38183 20.9247 5.20094 19.2072C4.88778 16.3494 4.36454 9.59293 4.35482 9.52468C4.34509 9.3189 4.41123 9.12316 4.54544 8.96456C4.67771 8.81801 4.86833 8.72968 5.06867 8.72968H18.9392C19.1386 8.72968 19.3195 8.81801 19.4624 8.96456C19.5957 9.12316 19.6628 9.3189 19.6433 9.52468Z"
              fill="#E31E25"
            />
            <path
              d="M21 5.9997C21 5.58714 20.6761 5.26392 20.2871 5.26392H17.3714C16.7781 5.26392 16.2627 4.84032 16.1304 4.24307L15.967 3.51131C15.7385 2.62697 14.9498 2.00763 14.0647 2.00763H9.93624C9.0415 2.00763 8.26054 2.62697 8.02323 3.55949L7.87054 4.24407C7.7373 4.84032 7.22185 5.26392 6.62957 5.26392H3.71385C3.32386 5.26392 3 5.58714 3 5.9997V6.38114C3 6.78366 3.32386 7.11691 3.71385 7.11691H20.2871C20.6761 7.11691 21 6.78366 21 6.38114V5.9997Z"
              fill="#E31E25"
            />
          </svg>
        </div>
        <div className="clear__text">
          <p>Очистить корзину</p>
        </div>
      </div>
    </div>
  );
};

export default ClearCart;
