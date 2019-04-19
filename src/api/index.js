import axios from 'axios';
import { API_URL } from '../constants';

export const getDepartures = (date) => {
   return axios.get(`${API_URL}/${date}`);
};