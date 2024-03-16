import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://server.tg-delivery.ru/api/sushi',
  validateStatus: () => true,
});

export default instance;
