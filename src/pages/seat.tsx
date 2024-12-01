// import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Step from "../components/step"
import MovieTitle from "../components/movieTitle"
import MovieSeats from "../components/movieSeats"
import Movie from "../components/movie"
import "../components/styles/app.css"



function seat() {

  return (
    <div className="App">
      <div><Navbar/></div>
      
      <div className="page-container max-md:hidden">
        <div><Step/></div>
        {/* <div style={{backgroundColor: "#f5f7fb"}}><MovieTitle/></div>
        <div><MovieSeats/></div> */}
        <div><Movie/></div>
      </div>
      
      <div><Footer/></div>
    </div>

  )
}

export default seat