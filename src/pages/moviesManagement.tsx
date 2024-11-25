import React, { useState, useEffect, Fragment, Component } from "react";
import "../components/styles/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = "http://localhost:3306/movie/get"

function moviesManagement() {
    
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get(baseURL)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }, [])

  return (
    <div className="justify-center ">
        <table>
        <thead>
            <tr className="gap-20">
            <th >ID</th>
            <th>NAME</th>
            <th></th>
            <th></th>
            <th></th>

            </tr>
        </thead>
        <tbody>
        {/* {data.map((movie, index) =>{
                return <tr key={index} className="gap-12">
                    <td>{movie.movie_id}</td>
                    <td>{movie.movie_title}</td>
                    <td>
                        <button className='btn btn-sm btn-info'>Read</button>
                        <button className='btn btn-sm btn-primary mx-2'>Edit</button>
                        <button className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                </tr>
                })} */}
        </tbody>
        </table>
    </div>
  );
}

export default moviesManagement;
