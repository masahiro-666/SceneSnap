import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import logo from "../components/mockups/logos/logo6.png";
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
    

    return (
        <>
            <div className="navbar-container max-md:hidden justify-between max-h-11 mb-3 md:max-h-20 lg:max-h-52">
                <div className="navbar-content">
                    <div className="navbar-left">
                        <Link to="/home">
                            <div className="navbar-logo mb-4">
                                <img src={logo} alt="scenesnap" />
                            </div>
                        </Link>
                    </div>
                    {/* <div className="navbar-right">
                        
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Navbar;