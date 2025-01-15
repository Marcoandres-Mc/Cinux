import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';
import { getSedes } from '../../api/sedes';

const Sedes = () => {
    const [sedes, setSedes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getSedes();
                setSedes(data);
            } catch (error) {
                console.error('Error fetching sedes:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto p-5">
                {loading ? (
                    <div className=" flex text-center justify-center ">
                        <Spinner color="blue" size="xxl" className="flex justify-center m-20 w-28 h-28" />
                    </div>
                ) : (
                    <>
                        {sedes.map((sede) => (
                            <div key={sede._id} className="relative flex flex-col text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105">
                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-80">
                                    <img
                                        src={sede.url}
                                        alt={sede.nombre}
                                        className="object-cover w-full h-full rounded-t-xl"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-lg font-bold text-blue-gray-900">{sede.nombre}</h2>
                                    <p className="mt-2 text-sm text-gray-700">{sede.direccion}</p>
                                    <p className="mt-1 text-sm text-gray-700">{sede.telefono}</p>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Sedes; 
