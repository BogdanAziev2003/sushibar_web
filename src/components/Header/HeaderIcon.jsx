import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';

const HeaderIcon = ({ pathname }) => {
  const { totalPrice } = useSelector((state) => state.items);
  return (
    <div className={styles.header__cart__icon}>
      {totalPrice}
      {pathname !== '/cart' ? (
        <Link to="/cart">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.38818 25.7356C7.38818 24.6856 8.23818 23.8356 9.28818 23.8356C10.3257 23.8356 11.1757 24.6856 11.1757 25.7356C11.1757 26.7731 10.3257 27.6231 9.28818 27.6231C8.23818 27.6231 7.38818 26.7731 7.38818 25.7356ZM21.4507 25.7356C21.4507 24.6856 22.3007 23.8356 23.3507 23.8356C24.3882 23.8356 25.2382 24.6856 25.2382 25.7356C25.2382 26.7731 24.3882 27.6231 23.3507 27.6231C22.3007 27.6231 21.4507 26.7731 21.4507 25.7356Z"
              fill="#E31E25"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.2384 7.93624C26.0009 7.93624 26.5009 8.19874 27.0009 8.77374C27.5009 9.34874 27.5884 10.1737 27.4759 10.9225L26.2884 19.1225C26.0634 20.6987 24.7134 21.86 23.1259 21.86H9.48843C7.82593 21.86 6.45093 20.585 6.31343 18.9362L5.16343 5.30999L3.27593 4.98499C2.77593 4.89749 2.42593 4.40999 2.51343 3.90999C2.60093 3.39749 3.08843 3.05999 3.60093 3.13499L6.58218 3.58499C7.00718 3.66124 7.31968 4.00999 7.35718 4.43499L7.59468 7.23499C7.63218 7.63624 7.95718 7.93624 8.35718 7.93624H25.2384ZM17.6634 14.435H21.1259C21.6509 14.435 22.0634 14.01 22.0634 13.4975C22.0634 12.9725 21.6509 12.56 21.1259 12.56H17.6634C17.1384 12.56 16.7259 12.9725 16.7259 13.4975C16.7259 14.01 17.1384 14.435 17.6634 14.435Z"
              fill="#E31E25"
            />
          </svg>
        </Link>
      ) : (
        <Link to="/">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4297 26.2147V22.3665C11.4296 21.3913 12.2196 20.5991 13.198 20.5929H16.7908C17.7736 20.5929 18.5703 21.387 18.5703 22.3665V26.2035C18.5703 27.0493 19.255 27.7367 20.1037 27.7428H22.5548C23.6995 27.7458 24.7984 27.2947 25.609 26.489C26.4195 25.6833 26.875 24.5893 26.875 23.4484V12.5172C26.875 11.5956 26.4651 10.7214 25.7558 10.1302L17.4287 3.49334C15.9731 2.33248 13.8942 2.36998 12.4817 3.58257L4.33377 10.1302C3.59093 10.704 3.14694 11.5808 3.125 12.5172V23.4373C3.125 25.8152 5.05923 27.7428 7.44522 27.7428H9.84036C10.249 27.7458 10.6419 27.5861 10.9318 27.2992C11.2218 27.0123 11.3849 26.6219 11.3849 26.2147H11.4297Z"
              fill="#E31E25"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default HeaderIcon;
