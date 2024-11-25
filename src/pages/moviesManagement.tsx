import React, { useState, useEffect, Fragment, Component } from "react";
import "../components/styles/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "../components/styles/movieManagement.css"

const baseURL = "http://localhost:3306/movie/get"

function moviesManagement() {
    
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get(baseURL)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }, [])

  return (
    <div>
      <table className="movieTable">
        <thead>
          <tr >
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frieren beyond journey's end</td>
            <td>170 นาที</td>
          </tr>
          <tr>
            <td>Arcane</td>
            <td>300 นาที</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default moviesManagement;
