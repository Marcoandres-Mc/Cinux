import mongoose from 'mongoose';

const ventaDeEntradasSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  nombreCompletoUsuario: {
    type: String,
    required: true,
  },
  numeroTarjetaUsuario: {
    type: String,
    required: true,
  },
  fechaVencimientoUsuario: {
    type: String,
    required: true,
  },
  CVV: {
    type: String,
    required: true,
  },
  nombrePelicula: {
    type: String,
    required: true,
  },
  sede: {
    type: String,
    required: true,
  },
  fechaYhora: {
    type: String,
    required: true,
  },
  tipoEntrada: {
    type: String,
    required: true,
  },
  cantidadAsientos: {
    type: Number,
    required: true,
  },
  asientos: {
    type: String,
    required: true,
  },
  dulceria: {
    type: String,
    required: true,
  },
  precioTotal: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false
});

export default mongoose.model('VentaDeEntradas', ventaDeEntradasSchema);