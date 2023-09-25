import React from 'react'
import Navbar from '../../Navigation/Navbar'
import Footer from '../../Footer/Footer'
import Paper from './Paper'
import Syllabus from './Syllabus'
const Quespaper = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-screen bg-blue-100 overflow-hidden font-poppins">
      <div className="sm:mt-36 mt-24">
          <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold sm:text-7xl text-5xl text-center">
            Previous Year Question Papers !
          </h1>
        </div>
      </div>
      <Paper/>
      {/* <Syllabus/> */}
      <Footer/>
    </div>
  )
}

export default Quespaper
