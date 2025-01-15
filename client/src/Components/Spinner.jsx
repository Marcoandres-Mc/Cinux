import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900 border-l-transparent border-r-transparent flex justify-center items-center">
        <ClipLoader color="#ffffff" size={50} />
      </div>
    </div>
  )
}

export default Spinner;