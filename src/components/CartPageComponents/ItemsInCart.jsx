import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import cartItemImage from '../../image/image.png';
import styles from '../../pages/CartPage/Cart.module.scss';
import {
  addItem,
  removeItem,
  removeItemsByCompound,
} from '../../redux/itemsSlice';
import ClearCart from './ClearCart';

const ItemsInCart = ({ itemsInCart, totalPrice }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    const newItem = {
      idInCart: uuidv4(),
      ...item,
    };
    dispatch(addItem(newItem));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleRemoveItemsByCompound = (item) => {
    dispatch(removeItemsByCompound(item));
  };

  return (
    <div className={styles.cart}>
      <ClearCart />
      <div className={styles.cart__inner}>
        {itemsInCart?.map((item, idx) => (
          <div key={idx} className={styles.item}>
            <div className={styles.item__image}>
              <img src={cartItemImage} alt="imageeee" />
            </div>
            <div className={styles.item__wrapper}>
              <div className={styles.item__info}>
                <div className={styles.item__name}>
                  <p>{item.name}</p>
                </div>
                <div className={styles.item__description}>
                  <p>
                    {item?.sizes
                      .filter((size) => size?.selected)
                      .map((size, idx) => (
                        <span key={idx}>{size?.title}</span>
                      ))}
                    {item?.modifiers?.filter((mod) => mod?.selected).length >
                      0 && (
                      <>
                        <br />
                        доп.{' '}
                        {item?.modifiers
                          .filter((mod) => mod?.selected)
                          .map((mod, idx) => (
                            <span key={idx} className={styles.mod__name}>
                              {idx > 0 && ', '}
                              {mod.name}
                            </span>
                          ))}
                      </>
                    )}
                    {item?.changes?.map((ch, idx) =>
                      ch?.items?.map((item, innerIdx) => {
                        if (item?.selected) {
                          return (
                            <span key={`${idx}-${innerIdx}`}>
                              <br />
                              {item?.name}
                            </span>
                          );
                        }
                        return null;
                      })
                    )}
                  </p>
                </div>
                <div className={styles.item__price}>
                  <p>
                    Цена: <span className={styles.price}>{item.price}</span> ₽
                  </p>
                </div>
              </div>
              <div className={styles.item__amount}>
                <div
                  className={styles.item__amount__minus}
                  onClick={() => handleRemoveItem(item)}
                >
                  <svg
                    width="16"
                    height="4"
                    viewBox="0 0 16 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.85046 0H6.14581H14.1471C15.1693 0 16 0.896644 16 2C16 3.10336 15.1693 4 14.1471 4H9.84921H6.14581H1.85046C0.828229 4 0 3.10336 0 2C0 0.896644 0.828229 0 1.85046 0Z"
                      fill="#E31E25"
                    />
                  </svg>
                </div>
                <div className="item__amount__count">
                  <p>{item.count}</p>
                </div>
                <div
                  className={styles.item__amount__plus}
                  onClick={() => handleAddItem(item)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1471 6.1483H9.84921V1.85295C9.84921 0.830717 9.02099 0 7.99876 0C6.97653 0 6.14581 0.830717 6.14581 1.85295V6.1483H1.85046C0.828229 6.1483 0 6.97901 0 8.00124C0 9.02347 0.828229 9.85419 1.85046 9.85419H6.14581V14.1471C6.14581 15.1693 6.97653 16 7.99876 16C9.02099 16 9.84921 15.1693 9.84921 14.1471V9.85419H14.1471C15.1693 9.85419 16 9.02347 16 8.00124C16 6.97901 15.1693 6.1483 14.1471 6.1483Z"
                      fill="#E31E25"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              className={styles.item__delete}
              onClick={() => {
                handleRemoveItemsByCompound(item);
              }}
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
          </div>
        ))}
      </div>
      <div className={styles.bill}>
        <div className={styles.bill__text}>
          <p>
            +Счет: <span>{totalPrice}</span> ₽
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemsInCart;
