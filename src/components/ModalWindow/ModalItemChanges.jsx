import React, { useEffect, useState } from 'react';
import styles from './ModalWindow.module.scss';
import { Fade } from '@mui/material';

const ModalItemChanges = ({
  updateItemForCart,
  setUpdateItemForCart,
  changeItems,
  changeName,
  id,
  isOpenDropdown,
  setIsOpenDropdown,
}) => {
  // чтобы молоко было полюбому выбрано
  useEffect(() => {
    if (changeName === 'Выберите молоко') {
      const updateChange = changeItems.map((ch, index) =>
        index === 3 ? { ...ch, selected: true } : ch
      );
      const updatedChanges = [
        {
          ...updateItemForCart.changes[0],
          items: updateChange,
        },
        ...updateItemForCart.changes.slice(1),
      ];
      setUpdateItemForCart({
        ...updateItemForCart,
        changes: updatedChanges,
      });
    }
    setSelected(changeItems.find((ch) => ch.selected).name);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const sizes = updateItemForCart.sizes;
  const [activeChange, setActiveChange] = useState({});
  const [firstOpen, setFirstOpen] = useState(false);

  useEffect(() => {
    if (activeChange && firstOpen) {
      const { price } = updateItemForCart.sizes.find((size) => size.selected);
      setUpdateItemForCart({
        ...updateItemForCart,
        price:
          activeChange.name === 'Без сиропа'
            ? price
            : updateItemForCart.price + activeChange.price >=
              price + activeChange.price
            ? price + activeChange.price
            : price,
      });
    }
  }, [sizes]);

  const handleActiveChange = (changeName) => {
    const updateChange = changeItems.map((change) =>
      change.name === changeName
        ? { ...change, selected: true }
        : { ...change, selected: false }
    );

    const updatedChanges = [...updateItemForCart.changes];
    updatedChanges[id] = {
      ...updateItemForCart.changes[id],
      items: updateChange,
    };

    const updateItem = updateChange.find((ch) => ch.selected === true);
    const { price } = updateItemForCart.sizes.find((size) => size.selected);
    if (updateItem.name.includes('молоко')) {
      setUpdateItemForCart({
        ...updateItemForCart,
        changes: updatedChanges,
      });
    } else {
      setActiveChange(updateItem);
      setUpdateItemForCart({
        ...updateItemForCart,
        changes: updatedChanges,
        price:
          updateItem.name === 'Без сиропа'
            ? price
            : updateItemForCart.price + updateItem.price >=
              price + updateItem.price
            ? price + updateItem.price
            : price,
      });
    }
    setSelected(changeName);
    setFirstOpen(true);
  };

  const handleToggleDropdown = () => {
    setIsOpenDropdown(changeName);
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.modal__changes}>
      <div className={styles.changes__title}>Выберите {changeName}</div>
      <div className={styles.changes__block} onClick={handleToggleDropdown}>
        <div className={styles.name}>{selected}</div>

        {isOpen && isOpenDropdown === changeName && (
          <Fade in={isOpen} timeout={{ enter: 300 }}>
            <div className={styles.dropdown__menu}>
              {changeItems.map((change, idx) => (
                <div
                  key={idx}
                  className={styles.dropdown__item}
                  onClick={() => handleActiveChange(change.name)}
                >
                  {change.name}
                  <div className={styles.dropdown__item__price}>
                    {change.price !== 0 && <>+ {change.price} ₽</>}
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        )}

        <div className={styles.img}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3335 9.99993C18.3335 14.5958 14.5952 18.3333 10.0002 18.3333C5.4052 18.3333 1.66687 14.5958 1.66687 9.99993C1.66687 5.40493 5.4052 1.6666 10.0002 1.6666C14.5952 1.6666 18.3335 5.40493 18.3335 9.99993Z"
              fill="white"
            />
            <path
              d="M13.5174 8.79794C13.5174 8.95711 13.4566 9.11711 13.3349 9.23878L10.4433 12.1446C10.3258 12.2621 10.1666 12.3279 9.99994 12.3279C9.8341 12.3279 9.67494 12.2621 9.55744 12.1446L6.6641 9.23878C6.42077 8.99461 6.42077 8.59961 6.66577 8.35544C6.91077 8.11211 7.3066 8.11294 7.54994 8.35711L9.99994 10.8179L12.4499 8.35711C12.6933 8.11294 13.0883 8.11211 13.3333 8.35544C13.4566 8.47711 13.5174 8.63794 13.5174 8.79794Z"
              fill="#E31E25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ModalItemChanges;
