import React, { useEffect, useState } from 'react';
import styles from './ModalWindow.module.scss';

const ModalItemSize = ({ updateItemForCart, setUpdateItemForCart }) => {
  const [firstOpen, setFirstOpen] = useState(true);
  const sizes = updateItemForCart.sizes;

  useEffect(() => {
    const updatedSizes = sizes.map((size, index) =>
      index === 0 ? { ...size, selected: true } : { ...size, selected: false }
    );
    setUpdateItemForCart({
      ...updateItemForCart,
      sizes: updatedSizes,
    });
    setFirstOpen(false);
  }, [firstOpen]);

  const handleChooseSize = (idx) => {
    const updateSizes = updateItemForCart.sizes.map((size, index) =>
      index === idx ? { ...size, selected: true } : { ...size, selected: false }
    );
    const updatedSize = updateSizes.find((size) => size.selected);

    setUpdateItemForCart({
      ...updateItemForCart,
      sizes: updateSizes,
      price: updatedSize.price + modPrice,
    });
  };

  const modPrice = updateItemForCart?.modifiers?.reduce((total, mod) => {
    if (mod?.selected) {
      total += mod?.price;
    }
    return total;
  }, 0);

  return (
    <>
      {sizes.length !== 1 && (
        <div className={styles.modal__size}>
          {sizes.map((size, index) => (
            <div
              key={index}
              onClick={() => handleChooseSize(index)}
              className={`${styles.size} ${
                size.selected ? styles.size__active : ''
              }`}
            >
              <p>{size.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ModalItemSize;
