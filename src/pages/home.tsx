import React, { useState, useEffect } from "react";

import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Movies from "../components/movies"

import { Link, useNavigate } from 'react-router-dom';
import { doSignOut } from '../firebase/auth';
import { useAuth } from '../context/authContext';

function home(){
    const { userLoggedIn } = useAuth(); // Get user from auth context
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await doSignOut();
            navigate('/signin');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };
    return(
        <>
            <div className="app-container">
                <div className="max-md:hidden">
                    <Navbar/>
                </div>
                <div className="page-container max-md:hidden">
                {userLoggedIn && (
                            <div className="user-info text-white">
                                <p className="text-white">Welcome, {userLoggedIn.email}!</p>
                            </div>
                        )}
                        <button className="text-white ml-4" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    <div className="bg-white rounded-t-3xl px-5 mt-1 py-1 md:hidden pb-60 h-full relative">

                    </div>
                </div>
                <div className="max-md:hidden">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default home