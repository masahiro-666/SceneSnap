import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Movies from "../components/movies";
import Ads from "../components/adsSildeShow/adsSlideShow"
import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import { useAuth } from "../context/authContext";
import useUserData from "../context/authContext/userdata";

function Home() {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();



    useEffect(() => {
        if (!userLoggedIn) {
            navigate("/signin");
        }
    }, [userLoggedIn, navigate]);

    return (
        <>
             <div className="app-container">
                <div className="max-md:hidden z-10">
                    <Navbar />
                </div>
                <div className="max-md:hidden z-0">
                    <Ads/>
                </div>
                <div className=" max-md:hidden">
                    <div className="bg-white movies-container">
                        <Movies/>
                    </div>
                </div>
                <div className="max-md:hidden">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;