import axios from 'axios';

export const api = axios.create({
  // baseURL: '',
  baseURL: 'http://localhost:3333',
});