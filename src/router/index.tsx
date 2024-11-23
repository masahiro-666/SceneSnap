import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from "../pages/home"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Forgetpassword from "../pages/forgetpassword"

export const router = createBrowserRouter([
    {
      path: '/home',
      element: (
        <div>
          <Home/>
        </div>
      ),
    },
    {
      path: '/signin',
      element: (
        <div>
          <Signin/>
        </div>
      ),
    },
    {
      path: '/signup',
      element: (
        <div>
          <Signup/>
        </div>
      ),
    },
    {
      path: '/forgetpassword',
      element: (
        <div>
          <Forgetpassword/>
        </div>
      ),
    },
])