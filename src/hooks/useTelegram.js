import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function useTelegram() {
  const [pathName, setPathName] = useState('/');
  useEffect(() => {
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

  const { totalPrice } = useSelector((state) => state.items);

  const tg = window.Telegram.WebApp;
  tg.MainButton.textColor = '#ffffff';
  tg.MainButton.setParams({ color: '#be0201', textColor: '#be0201' });
  tg.setHeaderColor('#000000');
  tg.setBackgroundColor('#000000');
  tg.enableClosingConfirmation();

  useEffect(() => {
    totalPriceButton();
  }, [pathName, totalPrice]);

  const totalPriceButton = () => {
    if (totalPrice !== 0) {
      if (pathName !== '/cart') {
        tg.MainButton.show();
        tg.MainButton.setText(`Мой заказ: ${totalPrice} ₽`);
      }
      if (pathName === '/cart') {
        tg.MainButton.setText(`Заказать: ${totalPrice} ₽`);
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
