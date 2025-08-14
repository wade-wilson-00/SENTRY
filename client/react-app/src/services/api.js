import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/users',
});
export const registerUser = async (userData) => API.post('/register', userData);
export const loginUser = async (userData) => API.post('/login', userData);
