import React, { useState, useEffect, Fragment } from "react";
import "../components/styles/styles.css";
import { Link } from 'react-router-dom';
import Movies from "../movies";

function moviesManagement() {
    return (
        <>
            <Fragment>
                <div className="page-container text-black">
                    <div style={{margin:"10rem"}}>
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Movies && Movies.length > 0
                                    ?
                                    Movies.map((item) =>{
                                        return(
                                            <tr>
                                                <td>
                                                    {item.id}
                                                </td>
                                                <td>
                                                    {item.Name}
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    "no data available"
                                }
                            </tbody>
                        </table>
                        <h1>THIS IS MOVIES MANAGEMENT</h1>
                    </div>
                </div>
            </Fragment>
        </>
    );
}

export default moviesManagement;