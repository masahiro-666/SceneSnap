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
  console.log("user data: ",userData);

  const handleSignOut = async () => {
    try {
        await doSignOut();
        navigate('/signin');
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
      <div className="navbar-container max-md:hidden justify-between max-h-11 mb-3 md:max-h-20 lg:max-h-52">
        <div className="columns-3 flex ">
          <div className="p-12">
            {localError ? (
              <h1>Error: {localError}</h1>
            ) : localUserData ? (
              <>
                <h1>Welcome {localUserData.customer_name}</h1>
                <p>credit : {localUserData.customer_credit}</p>
              </>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
          <div className="navbar-content px-12">
            <div className="navbar-left">
              <Link to="/home">
                <div className="navbar-logo mb-4">
                  <img src={logo} alt="scenesnap" />
                </div>
              </Link>
            </div>
          </div>
          <div className="text-black underline p-12 inline-block">
            <div className="columns-2">
              <Link to={"/history"}>
                <p>history</p>
              </Link>
              <Link to={"/topup"}>
                <p>topup</p>
              </Link>
              {userLoggedIn && (
                        <button className="ml-4 gg" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
