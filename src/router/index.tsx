import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from "../pages/home"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Forgetpassword from "../pages/forgetpassword"
import MoviesManagement from "../pages/moviesManagement"
import Seat from "../pages/seat"
import ImageUpload from "../test"
import AddMovie from '../pages/AddMovie'
import EditMovie from '../pages/EditMovie'
import Topup from '../pages/topup'
import Payment from '../pages/payment'
import History from '../pages/history'





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
      path: '/history',
      element: (
        <div>
          <History/>
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
    {
      path: '/moviesmanagement',
      element: (
        <div>
          <MoviesManagement/>
        </div>
      ),
    },
    {
      path: '/seat/:movieId', 
      element: (
        <div>
          <Seat/>
        </div>
      ),
    },
    {
      path: '/imageupload',
      element: (
        <div>
          <ImageUpload/>
        </div>
      ),
    },
    {
      path: '/movieadd',
      element: (
        <div>
          <AddMovie/>
        </div>
      ),
    },
    {
      path: '/movieedit/:id',
      element: (
        <div>
          <EditMovie/>
        </div>
      ),
    },
    {
      path: '/topup',
      element: (
        <div>
          <Topup/>
        </div>
      ),
    },
    {
      path: '/payment',
      element: (
        <div>
          <Payment/>
        </div>
      ),
    },
    {
      path: '/goodjobhacker',
      element: (
        <div>
          <Payment/>
        </div>
      ),
    },

    
])