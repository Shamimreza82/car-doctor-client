import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Services from "../pages/Home/Services/Services";
import Errorpage from "../pages/ErrorPage/Errorpage";

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
        }
      ]
    },
  ]);

  export default router; 