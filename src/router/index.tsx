import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from "../pages/home"

export const router = createBrowserRouter([
    {
      path: '/home',
      element: (
        <div>
          <Home/>
        </div>
      ),
    },
])