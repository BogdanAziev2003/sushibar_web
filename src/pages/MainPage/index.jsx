import React from 'react';

import styles from './MainPage.module.scss';
import Item from '../../components/MainPageComponents/Item';
import ItemsNotFound from '../../components/ItemsNotFound';

const MainPage = ({ items }) => {
  const categories = [
    { id: 0, title: 'ФИРМЕННЫЕ РОЛЛЫ' },
    { id: 1, title: 'ЖАРЕНЫЕ РОЛЛЫ' },
    { id: 2, title: 'КЛАССИЧЕСКИЕ РОЛЛЫ' },
    { id: 3, title: 'ЗАПЕЧЕННЫЕ РОЛЛЫ' },
    { id: 4, title: 'СЕТЫ' },
    { id: 5, title: 'ПИЦЦЫ' },
    { id: 6, title: 'WOK' },
    { id: 7, title: 'БУРГЕРЫ' },
    { id: 8, title: 'СЭНДВИЧИ' },
    { id: 9, title: 'САЛАТЫ' },
    { id: 10, title: 'СНЭКИ' },
    { id: 11, title: 'ДОПОЛНИТЕЛЬНО' },
    { id: 12, title: 'НАПИТКИ' },
  ];

  return (
    <div className={styles.main}>
      {items.length > 0 ? (
        categories.map((category) => (
          <div key={category.id}>
            {items.filter((item) => item.category === category.id).length >
              0 && (
              <div className={styles.main__category}>
                <div
                  className={`${styles.main__title} ${
                    category.id !== 0 && styles.marg_bot
                  }`}
                >
                  <p>{category.title}</p>
                </div>
                <div className={styles.main__list}>
                  {items
                    .filter((item) => item.category === category.id)
                    .map((item, id) => (
                      <Item key={id} {...item} />
                    ))}
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <ItemsNotFound />
      )}
    </div>
  );
};

export default MainPage;
