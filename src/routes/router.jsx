import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";

const router =createBrowserRouter(
   [
   {
    path:'/',
    element:<HomeLayout></HomeLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
   },
   {
    path:'/auth',
    element:<h2>Authentication layout</h2>
   },
   {
    path:'/art',
    element:<h2>art layout</h2>
   },
   {
    path:'/*',
    element:<h2>Error 404</h2>
   },
 ])
 export default router