import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ingresoDatosCompra } from '../../Components/Redux/Compra/EntradaCompraSlice';
/* import { getAsiestosOcupados } from '../../api/asientos'; */


const filas = ['AA', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
const columnas = Array.from({ length: 12 }, (_, i) => i + 1);

const Asiento = () => {
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);
  const [asientosOcupados, setAsientosOcupados] = useState(['A1', 'A2', 'D3', 'D4', 'A5', 'K11', 'K12', 'F8', 'F9', 'I10']);
  const datos = useSelector((state) => state.entradaCompra);
  const navigate = useNavigate();


  const toggleAsiento = (asiento) => {
    if (asientosOcupados.includes(asiento)) return;

    setAsientosSeleccionados((prev) =>
      prev.includes(asiento)
        ? prev.filter((a) => a !== asiento)
        : [...prev, asiento]
    );
  };

  const getClaseAsiento = (asiento) => {
    if (asientosSeleccionados.includes(asiento)) return 'bg-blue-500 text-white';
    if (asientosOcupados.includes(asiento)) return 'bg-red-500 text-white';
    return 'bg-white border border-gray-400';
  };


  const dispatch = useDispatch();

  /*   useEffect(() => {
      dispatch(actualizarCompra({
        asientos: asientosSeleccionados,
        cantidadAsientos: asientosSeleccionados.length,
    }))
    }, [asientosSeleccionados]); */

  const handleFuctionClick = () => {
    const nuevosDatos = {
      ...datos,
      asientos: asientosSeleccionados.join(', '),
      cantidadAsientos: asientosSeleccionados.length,
    };

    dispatch(ingresoDatosCompra(nuevosDatos));
    navigate("/home/comprar/entradas");

  };

  return (
    <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg shadow-lg w-[800] ">
      <div className='flex flex-row gap-10'>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Pantalla</h2>
          <div className="w-full h-2 bg-slate-950"></div>

          {/* Mapa de asientos */}
          <div className="flex flex-col items-center gap-2">
            {filas.map((fila) => (
              <div key={fila} className="flex items-center justify-center">
                <span className="w-8 text-center font-semibold">{fila}</span>
                <div className="grid grid-cols-12 gap-2">
                  {columnas.map((col) => {
                    const asiento = `${fila}${col}`;
                    return (
                      <button
                        key={asiento}
                        className={`w-5 h-5 flex items-center justify-center rounded-full hover:scale-105 transition-all ${getClaseAsiento(asiento)}`}
                        onClick={() => toggleAsiento(asiento)}
                      />
                    );
                  })}
                </div>
                <span className="w-8 text-center font-semibold">{fila}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Encabezado de la pantalla */}


        {/* Leyenda de asientos */}
        <div>
          <div className="flex flex-col mt-6 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 bg-white border border-gray-400 rounded-full"></span>
              <p>Disponible</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-500 rounded-full"></span>
              <p>Seleccionada</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 bg-red-500 rounded-full"></span>
              <p>Ocupada</p>
            </div>
          </div>

          {/* Lista de asientos seleccionados */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Butacas seleccionadas:</h3>
            <p className="text-gray-700">
              {asientosSeleccionados.length > 0 ? asientosSeleccionados.join(', ') : 'Ninguna'}
            </p>
          </div>
        </div>
      </div>
      <button onClick={() => handleFuctionClick()} className="m-5 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Siguiente
      </button>
    </div>
  );
};

export default Asiento;
