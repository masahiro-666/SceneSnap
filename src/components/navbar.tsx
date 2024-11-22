import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
            {/* {window.innerWidth > 375 ? ( */}
            
            <div className="navbar-container max-md:hidden justify-between max-h-11 md:max-h-20 lg:max-h-32">
                <div className="navbar-content ">
                    <div className="navbar-left">
                        <Link to="/home">
                            <div className="navbar-logo">
                                <h1>LOGO</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="page-container max-md:hidden">
            </div>
        </>
    );
}

export default Navbar;
