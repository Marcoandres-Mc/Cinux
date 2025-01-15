import {configureStore} from '@reduxjs/toolkit';
import entradaCompra from "./Compra/EntradaCompraSlice";
import usuario from "./Usuario/UsuarioSilce";
export const store = configureStore({
    reducer: {
        entradaCompra,
        usuario,
    },
});

export default store;

