import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-db0a7.firebaseio.com/'
});

export default instance;