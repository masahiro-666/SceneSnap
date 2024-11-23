import { useState } from 'react';
import "../components/styles/styles.css";
import logo from "../components/mockups/logo.png";
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function signup() {
  const [showPassword, setShowPassword] = useState(false);  // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);  // State for confirm password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);  // Toggle password visibility
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);  // Toggle confirm password visibility
  };

  return (
    <div className="h-full w-full bg-[#212121]">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="LOGO" src={logo} className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign up for a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  className="custom-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
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
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
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
                    <VisibilityIcon/>
                  ) : (
                    <VisibilityOffIcon/>
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                Confirm Password
              </label>
              <div className="relative mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
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
                    <VisibilityIcon/>
                  ) : (
                    <VisibilityOffIcon/>
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="custom-submit-btn"
              >
                SIGN UP
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-100">
              Already a member?{" "}
              <Link to="/signin">
                <a className="font-semibold text-emerald-500 hover:text-emerald-600">
                  Sign In
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default signup;