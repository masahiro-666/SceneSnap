import { useState, useEffect } from "react";
import "../components/styles/styles.css";
import logo from "../components/mockups/logos/logo15.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import Firebase auth
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth';
import { useAuth } from '../context/authContext';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { baseURL } from '../components/userIDConfig';
import axios from "axios";



function Signin() {
  const { userLoggedIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [isSigningIn, setIsSigningIn] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   setErrorMessage('');
  //   if (!isSigningIn) {
  //     setIsSigningIn(true);
  //     try {
  //       await doSignInWithEmailAndPassword(email, password);
  //       navigate('/home'); // Redirect to /home after successful sign-in
  //     } catch (error) {
  //       setErrorMessage(error.message);
  //       setIsSigningIn(false);
  //     }
  //   }
  // };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setErrorMessage('');
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        
        const userUid = auth.currentUser?.uid;
        if (!userUid) {
          setErrorMessage('User UID is not available.');
          setIsSigningIn(false);
          return;
        }
  
        // Fetch user data
        const userDoc = await axios.get(`${baseURL}/customer/getEachUser/${userUid}`);

        console.log("uid: ",userUid);
        console.log("user role: ",userDoc.data.role);
        
          if (userDoc.data.role == 0) {
            navigate('/home'); // Navigate to /home if the role is 0
          } else if (userDoc.data.role == 1) {
            navigate('/moviesManagement'); // Navigate to /moviesManagement if the role is 1
          } else {
            setErrorMessage('Invalid role');
          }

      } catch (error) {
        setErrorMessage('Error: ' + error.message); // More specific error message
        setIsSigningIn(false);
      }
    }
  };

  return (
    <>
      {/* {userLoggedIn && <Navigate to="/home" replace={true} />} */}
      <div className="h-full">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img alt="LOGO" src={logo} className="mx-auto h-20 w-auto" />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-black"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Bind email state
                    className="custom-input"
                  />
                </div>
              </div>

              <div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-black"
                  >
                    Password
                  </label>
                  <div className="relative mt-2">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Bind password state
                      className="custom-input"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 focus:outline-none"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </button>
                  </div>
                </div>
                
                <Link to="/forgetpassword">
                <div className="text-sm mt-2">
                  <a
                    className="inline-block align-middle py-1 px-2 font-semibold text-gray-400 hover:text-gray-500"
                  >
                    Forgot password?
                  </a>
                </div>
                </Link>
              </div>

              {errorMessage && (
                <div className="text-red-500 text-sm text-center">{errorMessage}</div>
              )}

              <div className="flex flex-col items-center space-y-4">
                <button type="submit" className="custom-submit-btn">
                  SIGN IN
                </button>

                <div className="flex items-center w-80">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-600">or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <Link to="/signup">
                  <button className="custom-outline-btn">SIGN UP</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;