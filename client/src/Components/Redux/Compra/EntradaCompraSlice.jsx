import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nombre: "",
  email: " ",
  nombreCompletoUsuario: "",
  numeroTarjetaUsuario: "",
  fechaVencimientoUsuario: "",
  CVV: "",
  nombrePelicula: "",
  sede: "",
  fechaYhora: "",
  tipoEntrada: "",
  cantidadAsientos: "",
  asientos: "",
  dulceria: "",
  precioTotal: ""
};



const entradaCompraSlice = createSlice({
  name: 'entradaCompra',
  initialState,
  reducers: {
    ingresoDatosCompra: (state, action) => {
      Object.assign(state, action.payload);
    },
    actualizarCompra: (state, action) => {
      const { nombrePelicula, sede, fechaYhora, tipoEntrada, cantidadAsientos, asientos, dulceria, precioTotal } = action.payload;
      state.nombrePelicula = nombrePelicula;
      state.sede = sede;
      state.fechaYhora = fechaYhora;
      state.tipoEntrada = tipoEntrada;
      state.cantidadAsientos = cantidadAsientos;
      state.asientos = asientos;
      state.dulceria = dulceria;
      state.precioTotal = precioTotal;
    },
    removeCompra: (state) => {
      return initialState;
    }
  }
})

export const { ingresoDatosCompra, removeCompra, actualizarCompra } = entradaCompraSlice.actions;
export default entradaCompraSlice.reducer;