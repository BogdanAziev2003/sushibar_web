import React, { useEffect, useState } from 'react';

import styles from '../../../pages/MainPage/MainPage.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../redux/searchSlice';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      handleSearchClear();
    }
  }, [pathname]);

  useEffect(() => {
    const Debonce = setTimeout(() => {
      dispatch(setSearchValue(searchTerm));
    }, 200);

    return () => clearTimeout(Debonce);
  }, [searchTerm, dispatch]);

  const handleSearchClear = () => {
    dispatch(setSearchValue(''));
    setSearchTerm('');
  };

  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Найти блюдо"
        />
      </div>

      <div className={styles.search_icon}>
        {searchTerm ? (
          <div
            className={styles.search__icon__clear}
            onClick={handleSearchClear}
          >
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.68654 6.17408L5.51247 4.00107L7.68532 1.82806C8.10326 1.4113 8.10326 0.732995 7.68532 0.316236C7.26737 -0.104189 6.59156 -0.102967 6.17361 0.315014L3.99954 2.48803L1.82547 0.31257C1.40752 -0.105411 0.730495 -0.102967 0.312545 0.31257C-0.104182 0.730551 -0.104182 1.40885 0.312545 1.82561L2.48784 4.00107L0.317434 6.17042C-0.100516 6.5884 -0.100516 7.2667 0.317434 7.68224C0.526408 7.89245 0.798931 7.99633 1.07268 7.99633C1.34764 7.99633 1.62016 7.89245 1.82914 7.68346L3.99954 5.51289L6.17483 7.68712C6.38381 7.89612 6.65633 8 6.93007 8C7.20382 8 7.47756 7.89489 7.68654 7.68712C8.10449 7.26914 8.10449 6.59206 7.68654 6.17408Z"
                fill="#be0201"
              />
            </svg>
          </div>
        ) : (
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
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
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Search;
