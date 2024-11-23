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
                <div className="max-md:hidden">
                    <Navbar />
                </div>
                <Ads/>  
                <div className="page-container max-md:hidden">
                    {/* {userLoggedIn && (
                        <div className="user-info text-white">
                        <h3 className="text-lg font-bold">User Information:</h3>
                        {userData ? (
                          <ul className="mt-2">
                            {Object.entries(userData).map(([key, value]) => (
                              <li key={key} className="capitalize">
                                <strong>{key.replace(/_/g, " ")}:</strong> {value?.toString() || "N/A"}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>No user data available.</p>
                        )}
                      </div>
                    )}
                    {userLoggedIn && (
                        <button className="ml-4 gg" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    )} */}
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