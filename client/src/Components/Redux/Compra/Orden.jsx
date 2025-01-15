import {createSlide} from '@reduxjs/toolkit';
const initialState = [
    {
        nombreCompleto: "",
        email: "",
        nombrePelicula: "",
        sede: "",
        dia: "",
        hora: "",
        sala: "",
        asientos: "",
        dulceria: "",
        cantidadAsientos: "",
        tipoEntrada:"",
        precioTotal: "0",


    }
]

const entradaCompraSlide = createSlide({
    name: 'entradaCompra',
    initialState,
    reducers: {
        ingresoDatosCompra: (state, action) => {
            state.push(action.payload)
        },
        removeCompra: (state, action) => {
            return state.filter((compra) => compra !== action.payload)
        }
    }
})

export const {comprarEntrada, removeCompra} = entradaCompraSlide.actions