import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from "../pages/home"
import Signin from "../pages/signin"

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
])