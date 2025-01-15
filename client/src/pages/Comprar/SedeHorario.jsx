import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ingresoDatosCompra } from '../../Components/Redux/Compra/EntradaCompraSlice';
import { useSelector } from 'react-redux';


const SedeHorario = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedDate, setSelectedDate] = useState('hoy');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const data = [
    {
      sede: 'Cinux Plaza Norte',
      horarios: {
        hoy: [
          {
            tipo: '2D REGULAR SUBTITULADA',
            funciones: ['05:10 pm', '06:00 pm', '07:00 pm', '08:20 pm', '09:00 pm', '10:00 pm'],
          },
          {
            tipo: '2D REGULAR DOBLADA',
            funciones: ['02:10 pm', '03:00 pm'],
          },
        ],
        mañana: [
          {
            tipo: 'Cinux Real Plaza',
            funciones: ['05:00 pm', '07:00 pm'],
          },
        ],
      },
    },
    {
      sede: 'Cinux Arequipa',
      horarios: {
        hoy: [
          {
            tipo: '2D REGULAR SUBTITULADA',
            funciones: ['01:10 pm', '03:00 pm', '05:10 pm'],
          },
        ],
        mañana: [
          {
            tipo: '2D REGULAR SUBTITULADA',
            funciones: ['05:00 pm', '07:00 pm'],
          },
        ],
      },
    },
    {
      sede: 'Cinux Chiclayo',
      horarios: {
        hoy: [
          {
            tipo: '2D REGULAR DOBLADA',
            funciones: ['12:00 pm', '03:00 pm', '06:00 pm'],
          },
        ],
        mañana: [
          {
            tipo: '2D REGULAR SUBTITULADA',
            funciones: ['05:00 pm', '07:00 pm'],
          },
        ],
      },
    },
    {
      sede: 'Cinux Piura Mall',
      horarios: {
        hoy: [
          {
            tipo: '2D REGULAR SUBTITULADA',
            funciones: ['07:00 pm', '09:30 pm'],
          },
        ],
        mañana: [
          {
            tipo: '2D REGULAR SUBTITULADA',
            funciones: ['05:00 pm', '07:00 pm'],
          },
        ],
      },
    },
    {
      sede: 'Cinux Trujillo',
      horarios: {
        hoy: [
          {
            tipo: '2D REGULAR DOBLADA',
            funciones: ['01:30 pm', '04:00 pm', '08:00 pm'],
          },
        ],
        mañana: [
          {
            tipo: '2D REGULAR SUBTITULADA',
            funciones: ['05:00 pm', '07:00 pm'],
          },
        ],
      },
    },
  ];


  const toggleSede = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const datos = useSelector((state) => state.entradaCompra);

  const handleFuctionClick = (sede, hora) => {
    const nuevosDatos = {
      ...datos,
      sede: sede,
      fechaYhora: selectedDate + " -- " + hora,
    };

    dispatch(ingresoDatosCompra(nuevosDatos));
    if(datos.email === " "){
      navigate("/login");
      return;
  }else{
    navigate("/home/comprar/asiento");
  }
    

  }

  return (
    <div className="p-5 w-[900px] bg-white mt-5">
      <div className="mb-2">
        <label className="block mb-2">Selecciona una fecha:</label>
        <select
          value={selectedDate}
          onChange={handleDateChange}
          className="border rounded p-2"
        >
          <option value="hoy">Hoy</option>
          <option value="mañana">Mañana</option>
        </select>
      </div>
      {data.map((sede, index) => (
        <div key={index} className="mb-4 border-b">
          <h3
            className="text-lg font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => toggleSede(index)}
          >
            {sede.sede}
            <span>{expanded === index ? '−' : '+'}</span>
          </h3>

          {expanded === index && (
            <div className="mt-2">
              {sede.horarios[selectedDate] ? (
                sede.horarios[selectedDate].map((horario, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-medium">
                        {horario.tipo}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {horario.funciones.map((funcion, j) => (
                        <button
                          key={j}
                          className="px-4 py-2 border rounded-md hover:bg-blue-100 flex items-center gap-2"
                          onClick={() => handleFuctionClick(sede.sede, funcion)}
                        >
                          {funcion}
                          <span className="text-blue-600">
                            <i className="fas fa-chair"></i>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No hay horarios disponibles para esta fecha.</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SedeHorario;