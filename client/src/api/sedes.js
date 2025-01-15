import axios from 'axios';
import { API } from './urlAPI';

export const getSedes = async () => {
    try {
        const response = await axios.get(`${API}/api/sedes`);
        return response.data;
    } catch (error) {
        console.error("Error fetching sedes:", error);
        throw error;
    }
}

export const getSede = async (id) => {
    try {
        const response = await axios.get(`${API}/api/sede/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching sede with id ${id}:`, error);
        throw error;
    }
}

export const registerSedes = async (sede) => {
    try {
        const response = await axios.post(`${API}/api/sede`, sede);
        return response.data;
    } catch (error) {
        console.error("Error creating sede:", error);
        throw error;
    }
}

export const deleteSede = async (id) => {
    try {
        const response = await axios.delete(`${API}/api/sedes/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting sede with id ${id}:`, error);
        throw error;
    }
}

