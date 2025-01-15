import axios from 'axios';
import { API } from './urlAPI';



export const loginUser = async (userData) => {
    try {
      const response = await axios.post(`${API}/api/auth/login`, userData);
      return response;
    } catch (error) {
      throw error;
    }
  };

export const logoutUser = () => {
    return axios.post(`${API}/api/auth/logout`);
}   

