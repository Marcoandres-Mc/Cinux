import Dulce from '../models/dulceria.model.js';

export const getDulces = async (req, res) => {
  try {
    const dulces = await Dulce.find();
    res.json(dulces);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const getDulce = async (req, res) => {
  try {
    const dulce = await Dulce.findById(req.params.id);
    if (!dulce) {
      return res.status(404).json({ mensaje: 'Dulce no encontrado' });
    }
    res.json(dulce);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const registerDulce = async (req, res) => {
  try {
    const { nombre, categoria, marca, precio, stock, descripcion, url } = req.body;
    if (!nombre || !categoria || !marca || !precio || !stock || !descripcion || !url) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }
    const newDulce = new Dulce({ nombre, categoria, marca, precio, stock, descripcion, url });
    const savedDulce = await newDulce.save();
    res.status(201).json(savedDulce);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export const deleteDulce = async (req, res) => {
  try {
    const dulce = await Dulce.findByIdAndDelete(req.params.id);
    if (!dulce) {
      return res.status(404).json({ mensaje: 'Dulce no encontrado' });
    }
    res.json({ mensaje: 'Dulce eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};