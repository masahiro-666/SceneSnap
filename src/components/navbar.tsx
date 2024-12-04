import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import logo from "../components/mockups/logos/logo5.png";
import { Link, useNavigate } from "react-router-dom";
import useUserData from "../context/authContext/userdata";
import { doSignOut } from "../firebase/auth";
import { useAuth } from "../context/authContext";

function Navbar() {
  // Local states for user data and error
  const { userLoggedIn } = useAuth();
  const [localUserData, setLocalUserData] = useState(null);
  const navigate = useNavigate();
  const [localError, setLocalError] = useState(null);

  // Destructure the hook's user data and error
  const { userData, error } = useUserData();
  console.log("user data: ", userData);

  const handleSignOut = async () => {
    try {
      await doSignOut();
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  // Update local state when hook's data changes
  useEffect(() => {
    if (userData) {
      setLocalUserData(userData); // Store user data locally
    }
    if (error) {
      setLocalError(error); // Store error locally
    }
  }, [userData, error]); // Dependency on hook's states



  return (
    <>
      <div className="navbar-container bg-white shadow-md relative flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          {localError ? (
            <h1 className="text-red-500">Error: {localError}</h1>
          ) : localUserData ? (
            <>
              <div className="text-gray-800">
                <h1 className="text-lg font-semibold">
                  Welcome, {localUserData.customer_name}
                </h1>
                <p className="text-sm text-gray-500">
                  Credit: {localUserData.customer_credit}
                </p>
              </div>
            </>
          ) : (
            <h1 className="text-gray-500">Loading...</h1>
          )}
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
        
          <Link to="/home">
            <img
              src={logo}
              alt="SceneSnap"
              className="h-12 md:h-16 lg:h-[150px] object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-6">
        {localUserData?.role === 1 && (
            <Link to="/moviesmanagement" className="text-gray-700 hover:text-gray-900">
              Movie Management
            </Link>
          )}
          <Link to="/history" className="text-gray-700 hover:text-gray-900">
            History
          </Link>
          <Link to="/topup" className="text-gray-700 hover:text-gray-900">
            Topup
          </Link>
          {userLoggedIn && (
            <button
              onClick={handleSignOut}
              className="text-gray-700 hover:text-red-600 font-medium transition"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
