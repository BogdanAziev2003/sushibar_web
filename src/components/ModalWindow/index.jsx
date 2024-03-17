import React from 'react';
import { Box, Fade, Modal } from '@mui/material';
import { IoMdCloseCircle } from 'react-icons/io';

import styles from './ModalWindow.module.scss';
import imageRoll from '../../image/image.png';

const ModalWindow = ({ open, setOpen, item }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open} timeout={{ enter: 500 }}>
        <Box
          sx={{
            outline: '0',
          }}
        >
          <div className={styles.modal}>
            <IoMdCloseCircle
              className={styles.modal__close__btn}
              style={{ color: '#fe5e00', backgroundColor: '' }}
              onClick={handleClose}
            />
            <div className={styles.modal__image}>
              <img src={imageRoll} alt="imageee" />
            </div>
            <div className={styles.modal__info}>
              <div className={styles.modal__name}>
                <div className={styles.modal__info__item}>
                  <div className={styles.modal__info__name}>{item.name}</div>
                  <div className={styles.modal__info__price}>100 ₽</div>
                </div>
              </div>
              <div className={styles.modal__amount}>
                <div className={styles.modal__amount__minus}>
                  <svg
                    width="16"
                    height="4"
                    viewBox="0 0 16 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.85046 0H6.14581H14.1471C15.1693 0 16 0.896644 16 2C16 3.10336 15.1693 4 14.1471 4H9.84921H6.14581H1.85046C0.828229 4 0 3.10336 0 2C0 0.896644 0.828229 0 1.85046 0Z"
                      fill="#FE5E00"
                    />
                  </svg>
                </div>

                <div>
                  <p>1</p>
                </div>
                <div className={styles.modal__amount__plus}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1471 6.1483H9.84921V1.85295C9.84921 0.830717 9.02099 0 7.99876 0C6.97653 0 6.14581 0.830717 6.14581 1.85295V6.1483H1.85046C0.828229 6.1483 0 6.97901 0 8.00124C0 9.02347 0.828229 9.85419 1.85046 9.85419H6.14581V14.1471C6.14581 15.1693 6.97653 16 7.99876 16C9.02099 16 9.84921 15.1693 9.84921 14.1471V9.85419H14.1471C15.1693 9.85419 16 9.02347 16 8.00124C16 6.97901 15.1693 6.1483 14.1471 6.1483Z"
                      fill="#FE5E00"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.modal__button}>
              <p>Добавить за 290 ₽</p>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalWindow;
