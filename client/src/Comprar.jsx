import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Asiento from './pages/Comprar/Asiento'
import Entradas from './pages/Comprar/Entradas'
import Dulceria from './pages/Comprar/Dulceria'
import Pago from './pages/Comprar/Pago'

import SedeHorario from './pages/Comprar/SedeHorario'
import ComprarP from './pages/ComprarP'
import ResumenCompra from './pages/ResumenCompra'

const Comprar = () => {
  return (
    <>
    <div className="flex flex-row items-center justify-center w-full">
      <ResumenCompra />
      <div className="flex flex-col items-center min-h-screen justify-center w-[1000px]">

        <ComprarP />

        <Routes>
          <Route path="*" element={<SedeHorario />} />
          <Route path="/asiento" element={<Asiento />} />
          <Route path="/entradas" element={<Entradas />} />
          <Route path="/dulceria" element={<Dulceria />} />
          <Route path="/pago" element={<Pago />} />
          <Route path="/sede" element={<SedeHorario />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default Comprar;