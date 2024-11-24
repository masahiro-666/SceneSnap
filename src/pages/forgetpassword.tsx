import { useState } from "react";
import "../components/styles/styles.css";
import logo from "../components/mockups/logos/logo15.png";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth"; // Import Firebase's reset email method
import { auth } from "../firebaseConfig"; // Import Firebase auth

function Forgotpassword() {
  const [email, setEmail] = useState(""); // Email state
  const [errorMessage, setErrorMessage] = useState(""); // Error state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send password reset email using Firebase
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage("Password reset link sent! Check your email."); // Show success message
      setErrorMessage(""); // Clear any previous error messages
    } catch (error) {
      setErrorMessage(error.message); // Set error message if something goes wrong
      setSuccessMessage(""); // Clear success message on error
    }
  };

  return (
    <div className="h-full w-full]">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="LOGO" src={logo} className="mx-auto h-20 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
            Forgot your password?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Enter your email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="custom-input"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm text-center">{errorMessage}</div>
            )}

            {successMessage && (
              <div className="text-green-500 text-sm text-center">{successMessage}</div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="custom-submit-btn"
              >
                Send Reset Link
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Remembered your password?{" "}
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

export default Forgotpassword;