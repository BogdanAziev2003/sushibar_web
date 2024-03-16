import React, { useEffect, useState } from 'react';

import styles from '../../../pages/MainPage/MainPage.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../redux/searchSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const Debonce = setTimeout(() => {
      dispatch(setSearchValue(searchTerm));
    }, 300);

    return () => clearTimeout(Debonce);
  }, [searchTerm, dispatch]);

  const handleSearchClear = () => {
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
                fill="#E31E25"
              />
            </svg>
          </div>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="10.5992"
              cy="10.6532"
              rx="8.59922"
              ry="8.65324"
              fill="#E31E25"
            />
            <path
              d="M20.6745 21.9553C20.3405 21.9445 20.0228 21.807 19.7853 21.5705L17.7488 19.1902C17.3122 18.7909 17.2765 18.1123 17.6688 17.6689C17.8524 17.4831 18.102 17.3787 18.3624 17.3787C18.6228 17.3787 18.8725 17.4831 19.0561 17.6689L21.6172 19.7181C21.9861 20.0957 22.0999 20.6563 21.9078 21.1492C21.7157 21.6422 21.2535 21.9754 20.7279 22L20.6745 21.9553Z"
              fill="#E31E25"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Search;
