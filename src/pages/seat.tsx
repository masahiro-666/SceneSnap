// import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Step from "../components/step"
import MovieTitle from "../components/movieTitle"
import MovieSeats from "../components/movieSeats"
import "../components/styles/app.css"



function seat() {

  return (
    <div className="App">
      <div><Navbar/></div>
      
      <div className="page-container max-md:hidden">
        <div><Step/></div>
        <div><MovieTitle/></div>
        <div><MovieSeats/></div>
      </div>
      
      <div><Footer/></div>
    </div>

  )
}

export default seat