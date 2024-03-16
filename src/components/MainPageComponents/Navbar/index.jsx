import React from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ pathname }) => {
  const navItems = [
    { path: '/', title: 'Все' },
    { path: '/burgers', title: 'Бургеры' },
    { path: '/shaurma', title: 'Шаурма' },
    { path: '/tauk', title: 'Тауки' },
    { path: '/hot-dogs', title: 'Хот-Доги' },
    { path: '/sandwich', title: 'Сэндвичи' },
    { path: '/firmen', title: 'Фирменые' },
    { path: '/snack', title: 'Снэки' },
    { path: '/sauce', title: 'Соусы' },
    { path: '/modifiers', title: 'Добавки' },
    { path: '/coffee', title: 'Кофе' },
    { path: '/tea', title: 'Чаи' },
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
