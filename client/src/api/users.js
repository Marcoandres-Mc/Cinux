import axios from 'axios';
import { API } from './urlAPI';

export const getUsers = async () => {
    try {
      const response = await axios.get(`${API}/api/usuarios`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  };

export const getUser = async (email) => {
    try {
        const response = await axios.get(`${API}/api/usuario/${email}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return [];
    }
}
export const registerUser = (user) => { 
  return axios.post(`${API}/api/usuario`,user);
}

export const deleteUser = (id) => {
  return axios.delete(`${API}/api/usuario/${id}`);
}



