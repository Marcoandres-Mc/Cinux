import React, { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';



export const ComprarP = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const navigate = useNavigate();



  const pasosCompra = (activeStep) => {
    switch (activeStep) {
      case 0:
        return "/home/comprar/asiento";
      case 1:
        return "/home/comprar/entradas";
      case 2:
        return "/home/comprar/dulceria";
      case 3:
        return "/home/comprar/pago";
    }
  }

  const hadleClick = (step) => {
    setActiveStep(step);
    navigate(pasosCompra(step));
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log(activeStep);
    navigate(pasosCompra(activeStep + 1));

  };
  const handlePrev = () => {
    if (activeStep === 4)
      setActiveStep(3); {
    }

    setActiveStep(activeStep - 1);
    console.log(activeStep);
    navigate(pasosCompra(activeStep));
  };




  return (
    <>

      <div className="bg-white mt-20 p-2 max-w-md rounded-lg w-full m-2">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          className=""
        >
          <Step onClick={() => hadleClick(0)} className="cursor-pointer">
            <HomeIcon className={`h-6 w-6 ${activeStep === 0 ? 'text-black' : 'text-black'}`} />
          </Step>
          <Step onClick={() => hadleClick(1)} className="cursor-pointer">
            <CogIcon className={`h-6 w-6 ${activeStep === 1 ? 'text-black' : 'text-black'}`} />
          </Step>
          <Step onClick={() => hadleClick(2)} className="cursor-pointer">
            <CogIcon className={`h-6 w-6 ${activeStep === 2 ? 'text-black' : 'text-black'}`} />
          </Step>
          <Step onClick={() => hadleClick(3)} className="cursor-pointer">
            <UserIcon className={`h-6 w-6 ${activeStep === 3 ? 'text-black' : 'text-black'}`} />
          </Step>

        </Stepper>
      </div>
    </>

  );
}

export default ComprarP;