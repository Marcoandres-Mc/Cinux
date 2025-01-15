import VentaDeEntradas from '../models/ventaDeEntradas.model.js';


export const createVentaDeEntrada = async (req, res) => {
    const {
      nombre,
      email,
      nombreCompletoUsuario,
      numeroTarjetaUsuario,
      fechaVencimientoUsuario,
      CVV,
      nombrePelicula,
      sede,
      fechaYhora,
      tipoEntrada,
      cantidadAsientos,
      asientos,
      dulceria,
      precioTotal
    } = req.body;
  
    try {
      const newVentaDeEntrada = new VentaDeEntradas({
        nombre,
        email,
        nombreCompletoUsuario,
        numeroTarjetaUsuario,
        fechaVencimientoUsuario,
        CVV,
        nombrePelicula,
        sede,
        fechaYhora,
        tipoEntrada,
        cantidadAsientos,
        asientos,
        dulceria,
        precioTotal
      });
  
      const ventaDeEntradaSaved = await newVentaDeEntrada.save();
      res.status(201).json(ventaDeEntradaSaved);
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  };


export const getVentasDeEntradas = async (req, res) => {
  try {
    const ventasDeEntradas = await VentaDeEntradas.find();
    res.json(ventasDeEntradas);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const getVentaDeEntradaById = async (req, res) => {
  const { id } = req.params;

  try {
    const ventaDeEntrada = await VentaDeEntradas.findById(id);

    if (!ventaDeEntrada) {
      return res.status(404).json({ mensaje: 'Venta de entrada no encontrada' });
    }

    res.json(ventaDeEntrada);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};


export const updateVentaDeEntrada = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    email,
    nombreCompletoUsuario,
    numeroTarjetaUsuario,
    fechaVencimientoUsuario,
    CVV,
    nombrePelicula,
    sede,
    fechaYhora,
    tipoEntrada,
    cantidadAsientos,
    asientos,
    dulceria,
    precioTotal
  } = req.body;

  try {
    const updatedVentaDeEntrada = await VentaDeEntradas.findByIdAndUpdate(
      id,
      {
        nombre,
        email,
        nombreCompletoUsuario,
        numeroTarjetaUsuario,
        fechaVencimientoUsuario,
        CVV,
        nombrePelicula,
        sede,
        fechaYhora,
        tipoEntrada,
        cantidadAsientos,
        asientos,
        dulceria,
        precioTotal
      },
      { new: true }
    );

    if (!updatedVentaDeEntrada) {
      return res.status(404).json({ mensaje: 'Venta de entrada no encontrada' });
    }

    res.json(updatedVentaDeEntrada);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};


export const deleteVentaDeEntrada = async (req, res) => {
  const { id } = req.params;

  try {
    const ventaDeEntrada = await VentaDeEntradas.findByIdAndDelete(id);

    if (!ventaDeEntrada) {
      return res.status(404).json({ mensaje: 'Venta de entrada no encontrada' });
    }

    res.json({ mensaje: 'Venta de entrada eliminada' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};