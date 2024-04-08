import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function useTelegram() {
  const [pathName, setPathName] = useState('/');
  useEffect(() => {
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

  const { itemsPrice, delPrice } = useSelector((state) => state.items);

  const tg = window.Telegram.WebApp;
  tg.MainButton.textColor = '#ffffff';
  tg.MainButton.color = '#be0201';
  tg.setHeaderColor('#000000');
  tg.setBackgroundColor('#000000');
  tg.enableClosingConfirmation();

  useEffect(() => {
    totalPriceButton();
  }, [pathName, itemsPrice, delPrice]);

  const totalPriceButton = () => {
    if (itemsPrice !== 0) {
      if (pathName !== '/cart') {
        tg.MainButton.show();
        tg.MainButton.setText(
          `Мой заказ: ${
            itemsPrice >= 1000 ? itemsPrice : itemsPrice + delPrice
          } ₽`
        );
      }
      if (pathName === '/cart') {
        tg.MainButton.setText(
          `Заказать: ${
            itemsPrice >= 1000 ? itemsPrice : itemsPrice + delPrice
          } ₽`
        );
      }
    } else {
      tg.MainButton.hide();
    }
  };

  return {
    totalPriceButton,
    tg,
  };
}
