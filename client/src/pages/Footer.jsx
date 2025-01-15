import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {


  return (
    <>
      <footer className="bg-black text-white text-center dark:bg-black dark:text-white lg:text-left">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
          <div className="me-12 hidden lg:block">
            <span>Conéctate con nosotros en nuestras redes sociales:</span>
          </div>
          <div className="flex justify-center">
            <a href="https://www.instagram.com/marco_23andres/" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/Marcoandres-Mc" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/17jeancruz/" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/Jean-20" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/hocchicr/" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/Hocchik" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            <div>
              <h6 className="mb-4 font-semibold uppercase">Cinux</h6>
              <p>
                Cinux es una plataforma web especializada en la venta de boletos para cines en Perú, diseñada para ofrecer una experiencia rápida y cómoda a los amantes del cine.
              </p>
            </div>

            <div className="text-center md:text-center md:col-start-2">
              <h6 className="mb-4 font-semibold uppercase">Enlaces útiles</h6>
              <p className="mb-4">
                <Link to="/home" className="text-neutral-600 dark:text-neutral-200">
                  Home
                </Link>
              </p>
              <p className="mb-4">
                <Link to="/home/peliculas" className="text-neutral-600 dark:text-neutral-200">
                  Películas
                </Link>
              </p>
              <p className="mb-4">
                <Link to="/home/sedes" className="text-neutral-600 dark:text-neutral-200">
                  Sedes
                </Link>
              </p>
              <p className="mb-4">
                <Link to="/home/dulceria" className="text-neutral-600 dark:text-neutral-200">
                  Dulceria
                </Link>
              </p>
            </div>

            <div className="text-center md:text-right">
              <h6 className="mb-4 font-semibold uppercase">Contacto</h6>
              <div className="space-y-2">
                <p>Lima, Perú</p>
                <p>Cinux@gmail.com</p>
                <p>+51 01 234 5678</p>
                <p>+51 01 234 5679</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-black text-white dark:bg-black dark:text-white">
          <span>© 2024 Derechos Reservados:</span>
          <a className="text-neutral-600 dark:text-neutral-400" href="https://technologyplus.pe/"> Cinux</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
