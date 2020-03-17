import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:6969',
  headers: { Authorization: localStorage.getItem('token') || '' }
});