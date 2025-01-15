import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ingresoDatosCompra } from '../Redux/Compra/EntradaCompraSlice';
import { useSelector } from 'react-redux';
const Carrusel = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Start with the first image

    const images = [
        {
            src: "https://moviecrazyplanet.com/wp-content/uploads/2024/10/El-tiempo-que-tenemos-credito-Imagem-Films-MX-1-scaled.jpg",
            title: "El Tiempo que Tenemos",
            description: "Una historia de amor eterna, profundamente conmovedora y envolvente."
        },
        {
            src: "https://m.media-amazon.com/images/S/pv-target-images/20b22107a5a08f7f38f9ceb1ea742cebacf2b1de10a15a117ee8422fc5ffcea7._SX1080_FMjpg_.jpg",
            title: "Terrifier 3",
            description: "Descripción de la segunda imagen aquí."
        },
        {
            src: "https://imgmedia.larepublica.pe/1200x630/larepublica/original/2024/05/31/665a867d06ec6a483010c7d5.jpg",
            title: "Haikyu! La batalla del basurero",
            description: "Descripción de la tercera imagen aquí."
        },
        {
            src: "https://hips.hearstapps.com/hmg-prod/images/venom-2-fotogramas-1634239260.png?crop=1xw:1xh;center,top&resize=1200:*",
            title: "Venom",
            description: "Descripción de la cuarta imagen aquí."
        },
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const datos = useSelector((state) => state.entradaCompra);
    const handleClick = (pelicula) => {
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

    return (
        <div id="animation-carousel" className="relative h-full pt-20 bg-white mx-5">
            {/* Carousel wrapper */}
            <div className="relative h-96 overflow-hidden rounded-lg md:h-[680px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 duration-200 ease-linear ${activeIndex === index ? 'block' : 'hidden'}`}
                    >
                        <img
                            src={image.src}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Slide ${index + 1}`}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                            <h2 className="text-white text-2xl">{image.title}</h2>
                            <p className="text-white">{image.description}</p>
                            <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded" onClick = {()=> handleClick(image.title)}>Comprar</button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carrusel;
