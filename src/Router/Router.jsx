import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Services from "../pages/Home/Services/Services";
import Errorpage from "../pages/ErrorPage/Errorpage";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import AllCheckout from "../pages/AllCheckout/AllCheckout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProductDetaile from "../pages/ProductDetaile/ProductDetaile";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddServices from "../pages/Dashboard/AddServices";
import UpdateServices from "../pages/Dashboard/UpdateServices";
import AllServices from "../pages/Dashboard/AllServices/AllServices";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            path: '/', 
            element: <Home></Home> 
        }, 
        {
          path: '/login', 
          element: <Login></Login>,
        }, 
        {
          path: '/service', 
          element: <Services></Services>
        }, 
        {
          path: '/signup', 
          element: <SignUp></SignUp>
        }, 
        {
          path: '/checkout/:id', 
          element: <PrivateRoute>
            <CheckOut></CheckOut>,
          </PrivateRoute>,
          loader: ({params}) => fetch (`http://localhost:5000/services/${params.id}`)
        }, 
        {
          path: '/allcheckout', 
          element: <PrivateRoute>
              <AllCheckout></AllCheckout>, 
            </PrivateRoute>
        }, 
        {
          path: '/productDetailes/:id', 
          element: <ProductDetaile></ProductDetaile>, 
          loader: ({params}) => fetch (`http://localhost:5000/servicesDetails/${params.id}`)
        }, 
        {
          path: '/dashboard', 
          element: <Dashboard></Dashboard>,
          children: [
            {
              path: '/dashboard/addServices', 
              element: <AddServices></AddServices>
            }, 
            {
              path: '/dashboard/updateServices', 
              element: <AllServices></AllServices>
            }, 
            {
              path: '/dashboard/upService/:id', 
              element: <UpdateServices></UpdateServices>,
              loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
          ]
        }
      ]
    },
  ]);

  export default router; 