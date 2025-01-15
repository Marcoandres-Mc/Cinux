import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ingresoDatosCompra, removeCompra } from '../../Components/Redux/Compra/EntradaCompraSlice';
import { useSelector } from 'react-redux';
import { createVentaDeEntrada } from '../../api/ventaDeEntradas';

const Pago = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const data = useSelector((state) => state.entradaCompra);
  
  const onSubmit = async(dataCard) => {
    console.log(data);
    const nuevosDatos = {
      ...data,
      nombreCompletoUsuario: dataCard.nombreCompleto,
      numeroTarjetaUsuario: dataCard.numeroTarjeta,
      fechaVencimientoUsuario: dataCard.fechaVencimiento,
      CVV: dataCard.cvv,
    };

    

    dispatch(ingresoDatosCompra(nuevosDatos));

    try{
      await createVentaDeEntrada(nuevosDatos);
      removeCompra();
    setShowModal(true);
    setTimeout(() => {
      
      setShowModal(false);
      navigate("/home");
      
      
    }, 2000);
    
    }catch (error) {
      console.error('Error registrando usuario:', error);
    
  };
}

  return (
    <section className="py-8 antialiased bg-gray-100 md:py-8 rounded-lg">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-fit">
          <h1 className="text-xl text-black text-center font-bold sm:text-2xl">Formulario</h1>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-lg border border-gray-300 bg-white p-6 shadow-md lg:max-w-xl lg:p-8">
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-800">Nombre Completo</label>
                  <input
                    type="text"
                    id="full_name"
                    {...register("nombreCompleto")}
                    className="block w-full rounded-lg border border-gray-300 bg-blue-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
                    placeholder=""
                    required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-gray-800">Numero de Tarjeta</label>
                  <input
                    maxLength="16"
                    type="text"
                    id="card-number-input"
                    {...register("numeroTarjeta")}
                    className="block w-full rounded-lg border border-gray-300 bg-blue-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="card-expiration-input" className="mb-2 block text-sm font-medium text-gray-800">Fecha de Vencimiento</label>
                  <input
                    maxLength="5"
                    type="text"
                    id="card-expiration-input"
                    {...register("fechaVencimiento")}
                    className="block w-full rounded-lg border border-gray-300 bg-blue-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="mm/yy"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cvv-input" className="mb-2 block text-sm font-medium text-gray-800">CVV</label>
                  <input
                    type="text"
                    id="cvv-input"
                    {...register("cvv")}
                    maxLength="3"
                    className="block w-full rounded-lg border border-gray-300 bg-blue-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="•••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Pagar Ahora
              </button>
            </form>
          </div>

          <div className="mt-6 flex items-center justify-center gap-8">
            <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="PayPal" />
            <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="Visa" />
            <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="MasterCard" />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h2 className="text-xl font-bold">Pago Exitoso</h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pago;