import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import { useAuth } from "../context/authContext";
import useUserData from "../context/authContext/userdata";

function Topup() {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();
    const { userData, loading, error } = useUserData();

    console.log("user data: ",userData);

    useEffect(() => {
        if (!userLoggedIn) {
            navigate("/signin");
        }
    }, [userLoggedIn, navigate]);

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
             <div className="app-container">
                <div className="max-md:hidden z-10">
                    <Navbar />
                </div>
                <div className="page-container max-md:hidden">
                    <div className="bg-white">

                    </div>
                </div>
                <div className="max-md:hidden">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Topup;