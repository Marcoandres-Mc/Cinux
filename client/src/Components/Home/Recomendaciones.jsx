import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';
import { getPeliculas } from '../../api/peliculas';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ingresoDatosCompra } from '../Redux/Compra/EntradaCompraSlice';
import { useSelector } from 'react-redux';

const Recomendaciones = () => {

    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getPeliculas();
                setPeliculas(data.slice(0, 8));
            } catch (error) {
                console.error('Error fetching admins:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const datos = useSelector((state) => state.entradaCompra);

    const hadleClick = (pelicula) => {

        if(datos.email === " "){
            navigate("/login");
            return;
        }
        dispatch(ingresoDatosCompra({
            ...datos,
            nombrePelicula: pelicula,
        }));
        console.log(datos);

        navigate("/home/comprar/sedes");
    }

    const hadleDetalles = (id, pelicula) => {
        dispatch(ingresoDatosCompra({
            ...datos,
            nombrePelicula: pelicula,
        }));
        console.log(datos);
        navigate("/home/pelicula/detalles/" + id);
    }


    return (
        <section className="py-8 px-4 bg-gray-100 pt-20">
            <h2 className="text-3xl font-bold mb-4 text-center">Recomendaciones</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {loading ? (
                    <div className=" flex text-center justify-center ">
                        <Spinner color="blue" size="xxl" className="flex justify-center m-20 w-28 h-28" />
                    </div>
                ) : (
                    <>
                        {peliculas.map((pelicula) => (
                            <div
                                key={pelicula._id}
                                className="relative group overflow-hidden rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105"
                            >
                                {pelicula.destacado && (
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        Estreno
                                    </span>
                                )}
                                <img
                                    src={pelicula.url}
                                    alt={pelicula.nombre}
                                    className="w-full h-100 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-center">{pelicula.nombre}</h3>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex space-x-4">
                                        <button onClick={() => hadleClick(pelicula.nombre)} className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
                                            Comprar
                                        </button>

                                        <button onClick={() => hadleDetalles(pelicula._id,pelicula.nombre)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                                            Más detalles
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div className="mt-6 text-center">
                <Link to="/home/peliculas" className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition duration-200">
                    Ver más películas
                </Link>
            </div>
        </section>
    );
};

export default Recomendaciones;
