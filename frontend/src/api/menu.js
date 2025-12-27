import axios from 'axios';

const API_URL = 'http://localhost:3000/api/menu';

export const getMenuItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addMenuItem = async (item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
};
