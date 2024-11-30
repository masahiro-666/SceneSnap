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
    console.log(data)
  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg p-12 px-44 bg-gray-50">
    <div className="HeadPage w-full text-center pb-12 font-sans text-4xl">
        <h1>Movie Management</h1>
    </div>
    <div className="relative py-5 ">
        <Link to="/create" className=" px-6 absolute inset-y-0 right-0 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">Create</Link>
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 py-6" >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Moive ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Movie Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Genre
                </th>
                <th scope="col" className="px-6 py-3">
                    Rate
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Delete</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}

            {data.map((movie, index) => {
                return <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td  className="px-6 py-4">{movie.movie_id}</td>
                    <td  className="px-6 py-4">{movie.movie_title}</td>
                    <td  className="px-6 py-4">{movie.movie_genre}</td>
                    <td  className="px-6 py-4">{movie.movie_rate}</td>

                    <td className="px-6 py-4 text-right">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    {/* <a href="#" className="font-medium text-white dark:text-white hover:underline">Edit</a>   */}
                    <p className="font-medium text-white dark:text-white">Edit</p>
                    </button>
                    </td>

                    <td className="px-6 py-4 text-right">
                    <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    {/* <a href="#" className="font-medium text-white dark:text-white hover:underline">Delete</a>   */}
                    <p className="font-medium text-white dark:text-white">Delete</p>

                    </button>
                    </td>
                </tr>
            })}
            
        </tbody>
    </table>
</div>

  );
}

export default moviesManagement;
