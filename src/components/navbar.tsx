import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import { Link, useNavigate } from 'react-router-dom';
import { doSignOut } from '../firebase/auth';
import { useAuth } from '../context/authContext';
import { baseUser, baseURL } from '../components/userIDConfig';


function Navbar() {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
          await doSignOut();
          navigate('/signin');
        } catch (error) {
          console.error("Error signing out: ", error);
        }
      };

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
            <button className="text-white" onClick={handleSignOut}>signout</button>

            <div className="page-container max-md:hidden">
            </div>
        </>
    );
}

export default Navbar;
