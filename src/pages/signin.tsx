import "../components/styles/styles.css";
import logo from "../components/mockups/logo.png";

function signin() {
    return (
      <>
        <div className="h-full bg-bgblack">
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
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="custom-input"
                    />
                  </div>
                  <div className="text-sm mt-2">
                    <a
                      href="#"
                      className="inline-block align-middle py-1 px-2 font-semibold text-gray-400 hover:text-gray-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
  
                <div className="flex flex-col items-center space-y-4">
                  <button
                    type="submit"
                    className="custom-submit-btn"
                  >
                    SIGN IN
                  </button>
  
                    <div className="flex items-center w-80">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-100">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
  
                  <button
                    type="submit"
                    className="custom-outline-btn"
                  >
                    SIGN UP
                  </button>
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
  