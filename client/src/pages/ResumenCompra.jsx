import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ResumenCompra = () => {
  const resumenCompra = useSelector((state) => state.entradaCompra);
  const [resumenCompraHtml, setResumenCompraHtml] = useState([]);

  useEffect(() => {
    const html = <>
      <div key={resumenCompra.nombrePelicula}>
        <div className="flex justify-between gap-2 mb-1">
          <h1 className="font-bold text-black">Nombre pelicula:</h1>
          <h1 className="text-black">{resumenCompra.nombrePelicula}</h1>
        </div>
        <div className="flex justify-between gap-2 mb-1">
          <h1 className="font-bold text-black">Sede:</h1>
          <h1 className="text-black">{resumenCompra.sede}</h1>
        </div>
        <div className="flex justify-between gap-2 mb-1">
          <h1 className="font-bold text-black">Fecha y hora:</h1>
          <h1 className="text-black">{resumenCompra.fechaYhora}</h1>
        </div>
        <div className="flex justify-between gap-2 mb-1">
          <h1 className="font-bold text-black">Tipo:</h1>
          <h1 className="text-black">{resumenCompra.tipoEntrada}</h1>
        </div>
        <div className="flex justify-between gap-2 mb-1">
          <h1 className="font-bold text-black">Cantidad asientos:</h1>
          <h1 className="text-black">{resumenCompra.cantidadAsientos}</h1>
        </div>
        <div className="flex justify-between gap-2 mb-1">
          <h1 className="font-bold text-black">Asiento:</h1>
          <h1 className="text-black">{resumenCompra.asientos}</h1>
        </div>
        <div className="flex justify-between gap-2 mb-1">
          <h1 className="font-bold text-black">Dulceria:</h1>
          <h1 className="text-black">{resumenCompra.dulceria}</h1>
        </div>
        <div className="flex justify-between gap-2 mb-1">
          <h1 className="font-bold text-black">Precio Total:</h1>
          <h1 className="text-black">S/. {resumenCompra.precioTotal}</h1>
        </div>
      </div>
    </>;

    if (resumenCompra) {
      console.log(resumenCompra);
    }
    setResumenCompraHtml(html);
  }, [resumenCompra]);

  return (
    <div className="p-5 m-5 border-black w-[350px] bg-gray-100">
      {resumenCompraHtml}
    </div>
  );
};

export default ResumenCompra;
