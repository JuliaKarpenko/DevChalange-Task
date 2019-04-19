import axios from 'axios';
import { API_URL } from '../constants';

export const getDepartures = () => {
   return axios.get(API_URL);
};