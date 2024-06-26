import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useTelegram } from './hooks/useTelegram';
import Layout from './components/Layout';
import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import Categories from './pages/CategoryPage';
import { getItems } from './redux/itemsSlice';

const categoryesData = [
  { path: '/branded-rolls', category: 0 },
  { path: '/fried-rolls', category: 1 },
  { path: '/classic-rolls', category: 2 },
  { path: '/baked-rolls', category: 3 },
  { path: '/sets', category: 4 },
  { path: '/pizza', category: 5 },
  { path: '/wok', category: 6 },
  { path: '/burgers', category: 7 },
  { path: '/sandwiches', category: 8 },
  { path: '/salads', category: 9 },
  { path: '/snacks', category: 10 },
  { path: '/dop', category: 11 },
  { path: '/drinks', category: 12 },
];

function App() {
  const { tg } = useTelegram();
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, []);

  let { items } = useSelector((state) => state.items);
  const { value } = useSelector((state) => state.search);

  items = items.map((item) => {
    if (item.category === 5) {
      return {
        ...item,
        price: item.sizes[1].price,
      };
    }
    let minPrice = item.sizes[0].price;
    for (let i = 1; i < item.sizes.length; i++) {
      if (item.sizes[i].price < minPrice) {
        minPrice = item.sizes[i].price;
      }
    }
    return {
      ...item,
      price: minPrice,
    };
  });

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage items={filteredItems} />} />
          {categoryesData.map((cat) => (
            <Route
              key={cat.category}
              path={cat.path}
              element={
                <Categories
                  items={filteredItems.filter(
                    (item) => item.category === cat.category
                  )}
                  filteredItems={filteredItems}
                  value={value}
                />
              }
            />
          ))}
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
