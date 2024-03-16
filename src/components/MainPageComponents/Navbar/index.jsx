import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ pathname }) => {
  const navItems = [
    { path: '/', title: 'Все' },
    { path: '/branded-rolls', title: 'Фирменные Роллы' },
    { path: '/fried-rolls', title: 'Жареные Роллы' },
    { path: '/classic-rolls', title: 'Классические Роллы' },
    { path: '/baked-rolls', title: 'Запеченные Роллы' },
    { path: '/sets', title: 'Сеты' },
    { path: '/pizza', title: 'Пиццы' },
    { path: '/wok', title: 'WOK' },
    { path: '/burgers', title: 'Бургеры' },
    { path: '/sandwiches', title: 'Сэндвичи' },
    { path: '/salads', title: 'Салаты' },
    { path: '/snacks', title: 'Снэки' },
    { path: '/dop', title: 'Дополнительно' },
    { path: '/drinks', title: 'Напитки' },
  ];

  return (
    <div className={styles.nav}>
      <div className={styles.nav__inner}>
        <div className={styles.nav__list}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <div
                className={`${styles.nav__el} ${
                  pathname === item.path ? styles.nav__el_active : ''
                }`}
              >
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
