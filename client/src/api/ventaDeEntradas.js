import axios from 'axios';
import { API } from './urlAPI';


export const createVentaDeEntrada = async (ventaDeEntrada) => {
  try {
    const response = await axios.post(`${API}/api/ventaDeEntrada`, ventaDeEntrada);
    return response.data;
  } catch (error) {
    console.error('Error creating venta de entrada:', error);
    throw error;
  }
};

export const getVentasDeEntradas = async () => {
  try {
    const response = await axios.get(`${API}/api/ventaDeEntradas`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ventas de entradas:', error);
    throw error;
  }
};

export const getVentaDeEntradaById = async (id) => {
  try {
    const response = await axios.get(`${API}/api/ventaDeEntrada/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching venta de entrada:', error);
    throw error;
  }
};

export const updateVentaDeEntrada = async (id, ventaDeEntrada) => {
  try {
    const response = await axios.put(`${API}/api/ventaDeEntrada/${id}`, ventaDeEntrada);
    return response.data;
  } catch (error) {
    console.error('Error updating venta de entrada:', error);
    throw error;
  }
};


export const deleteVentaDeEntrada = async (id) => {
  try {
    const response = await axios.delete(`${API}/api/ventaDeEntrada/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting venta de entrada:', error);
    throw error;
  }
};