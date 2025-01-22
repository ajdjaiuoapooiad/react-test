import axios from 'axios';
const productionUrl = 'https://my-json-server.typicode.com/ajdjaiuoapooiad/react-test';

export const customFetch = axios.create({
  baseURL: productionUrl,
});