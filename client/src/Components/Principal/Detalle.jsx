import React, { useEffect, useState } from 'react';
import { getPelicula } from '../../api/peliculas';
import { useParams } from 'react-router-dom';
import SedeHorario from '../../pages/Comprar/SedeHorario';

const DetallePelicula = () => {
    const [pelicula, setPelicula] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPelicula = async () => {
            const res = await getPelicula(id);
            setPelicula(res);
        };
        fetchPelicula();
    }, [id]);

    if (!pelicula) {
        return <p>No se encontró información de la película.</p>;
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 mt-20">
            <div className="max-w-4xl w-full bg-black shadow-lg rounded-lg overflow-hidden mt-10 flex flex-col md:flex-row">
                <img src={pelicula.url} alt={pelicula.nombre} className="w-[500px] h-[700px] object-cover" />
                <div className="p-6 md:w-1/2">
                    <h1 className="text-3xl font-bold text-white">{pelicula.nombre}</h1>
                    <p className="text-xl font-semibold text-white mt-2">{pelicula.categoria}</p>
                    <p className="text-lg text-white mt-2">{pelicula.productora}</p>
                    <p className="text-base text-white mt-4">{pelicula.descripcion}</p>
                </div>
            </div>
            <SedeHorario />
        </div>
    );
};

export default DetallePelicula;