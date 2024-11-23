import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from "../pages/home"
import Signin from "../pages/signin"
import Seat from "../pages/seat"

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
      path: '/seat',
      element: (
        <div>
          <Seat/>
        </div>
      ),
    },
])