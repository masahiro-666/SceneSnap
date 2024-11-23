import { useState } from "react";
import "../components/styles/styles.css";
import logo from "../components/mockups/logo.png";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function signin() {
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword); // Toggle confirm password visibility
  };

  return (
    <>
      <div className="h-full">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img alt="LOGO" src={logo} className="mx-auto h-10 w-auto" />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-white"
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
                    className="custom-input"
                  />
                </div>
              </div>

              <div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white"
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

              <div className="flex flex-col items-center space-y-4">
                <button type="submit" className="custom-submit-btn">
                  SIGN IN
                </button>

                <div className="flex items-center w-80">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-100">or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <Link to="/signup">
                  <button className="custom-outline-btn">SIGN UP</button>
                </Link>
              </div>
            </form>

            {/* <p className="mt-10 text-center text-sm/6 text-gray-100">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-semibold text-emerald-500 hover:text-emerald-600"
                >
                  Sign Up
                </a>
              </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default signin;
