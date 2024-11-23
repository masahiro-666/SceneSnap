import { useState } from "react";
import "../components/styles/styles.css";
import logo from "../components/mockups/logo.png";
import { Link } from "react-router-dom";
import { passwordReset } from "../firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      await passwordReset(email);
      setEmailMessage(true);
    } catch (error:any) {    
      if (error.code === 'auth/user-not-found') {
        alert('User not found, try again!')
        setEmail('')
      }
    console.log("Password reset link sent to:", email);
  };

  return (
    <div className="h-full w-full bg-[#212121]">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="LOGO" src={logo} className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Forgot your password?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full max-w-xs justify-center rounded-3xl bg-white px-5 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Reset Link
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-100">
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

export default ForgotPassword;