import React from 'react';

const ContactUs = () => {
  return (
    <section id="Negocios" className="flex flex-col justify-center items-center m-5 p-5 bg-black text-white mt-20">
      <h3 className="text-3xl font-bold mb-4">¡Contáctanos!</h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div>
          <label htmlFor="nombre" className="block text-gray-300">Nombre</label>
          <input
            type="text"
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-3 text-black"
            id="nombre"
            required
          />
        </div>
        <div>
          <label htmlFor="apellido" className="block text-gray-300">Apellido</label>
          <input
            type="text"
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-3 text-black"
            id="apellido"
            required
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="correo" className="block text-gray-300">Correo</label>
          <input
            type="email"
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-3 text-black"
            id="correo"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-gray-300">Teléfono</label>
          <input
            type="tel"
            className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-3 text-black"
            id="telefono"
            maxLength={9}
            required
          />
        </div>
        <div>
          <label htmlFor="ciudad" className="block text-gray-300">Ciudad</label>
          <select
            className="text-black form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-3"
            id="ciudad"
            required
          >
            <option selected disabled value="">Elige...</option>
            <option>Lima</option>
            {/* Agregar más opciones  */}
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="descripcion" className="block text-gray-300">Descripción</label>
          <textarea
            className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-3 text-black"
            id="descripcion"
            placeholder="Escribe aquí..."
            required
          ></textarea>
        </div>
        <div className="col-span-2 flex items-center mb-4">
          <input
            className="form-check-input mr-2"
            type="checkbox"
            id="terminos"
            required
          />
          <label className="text-gray-300" htmlFor="terminos">
            Estoy de acuerdo con los términos y condiciones
          </label>
        </div>
        <div className="col-span-2 text-center">
          <button
            className="mt-4 px-4 py-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;