import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://african-marketplace-1.herokuapp.com/api',
    headers: {
    'Content-Type': 'application/json',
     'authorization': token
    }
  });
};

export default axiosWithAuth;