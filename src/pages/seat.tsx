import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Step from "../components/step"


function seat() {

  return (
    <div>
      <div><Navbar/></div>
      <div className='bg-white'><Step/></div>
      {/* <div><Footer/></div> */}
    </div>

  )
}

export default seat