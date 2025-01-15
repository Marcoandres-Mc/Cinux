import React, { useState, useEffect } from 'react';
import { Spinner } from '@material-tailwind/react';
import { getDulces } from '../../api/dulceria';

const Dulceria = () => {
    const [dulces, setDulces] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getDulces();
                setDulces(data);
            } catch (error) {
                console.error('Error fetching dulceria:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);





    return (
        <div className="flex justify-center items-center min-h-screen mt-20 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {loading ? (
                    <div className=" flex text-center justify-center ">
                        <Spinner color="blue" size="xxl" className="flex justify-center m-20 w-28 h-28" />
                    </div>
                ) : (
                    <>
                        {dulces.map((item) => (
                            <div
                                key={item._id}
                                className=" relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105"
                            >
                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                                    <img
                                        src={item.url}
                                        alt={item.nombre}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="block font-sans text-base font-medium text-blue-gray-900">
                                            {item.nombre}
                                        </p>
                                        <p className="block font-sans text-base font-medium text-blue-gray-900">
                                            S/. {item.precio}
                                        </p>
                                    </div>
                                    <p className="block font-sans text-sm text-gray-700 opacity-75">
                                        {item.descripcion}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Dulceria;
