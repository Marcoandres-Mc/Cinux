import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nombre: '',
  email: '',
  password: '',
};

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    ingresoDatosUsuario: (state, action) => {
      state.nombre = action.payload.nombre;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    removeUsuario: (state) => {
      state.nombre = '';
      state.email = '';
      state.password = '';
    },
  },
});

export const { ingresoDatosUsuario, removeUsuario } = usuarioSlice.actions;
export default usuarioSlice.reducer;