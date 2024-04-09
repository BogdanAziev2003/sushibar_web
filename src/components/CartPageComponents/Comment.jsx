import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../../pages/CartPage/Cart.module.scss';
import { setComment } from '../../redux/commentSlice';

const Comment = () => {
  const dispatch = useDispatch();
  const { comment } = useSelector((s) => s.comment);
  const handlerCommentChange = (event) => {
    dispatch(setComment(event.target.value));
  };

  return (
    <div className={styles.comment}>
      <div className="comment__text">
        <p>Введите коментарий к заказу</p>
      </div>
      <div className={styles.comment__text}>
        <div className={styles.comment__icon}>
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
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
            />
          </svg>
        </div>
        <textarea
          name=""
          value={comment}
          onChange={handlerCommentChange}
          placeholder="Укажите любые дополнительные пожелания или особенности вашего заказа здесь"
          maxLength="200"
        ></textarea>
      </div>
    </div>
  );
};

export default Comment;
