// import { createBrowserRouter } from "react-router";
// import HomeLayout from "../layouts/HomeLayout";
// import Home from "../pages/Home";
// import ExploreArtworks from "../pages/ExploreArtworks";

// import Register from "../pages/Register";
// import AuthLayout from "../layouts/AuthLayout";
// import Login from "../pages/Login";

// const router =createBrowserRouter(
//    [
//    {
//     path:'/',
//     element:<HomeLayout></HomeLayout>,
//     children:[
//       {
//         path:'/',
//         element:<Home></Home>
//       },
//       {
//         path:'/exploreartworks',
//         element:<ExploreArtworks></ExploreArtworks>
//       },
//     ]
//    },
//    {
//     path:'/auth',
//     element:<AuthLayout></AuthLayout>,
//     children :[
//       {
//         path:'/auth/login',
//         element:<Login></Login>
//       },
//       {
//         path:'/auth/register',
//         element:<Register></Register>
//       }
//     ]
//    },
//    {
//     path:'/art',
//     element:<h2>art layout</h2>
//    },
//    {
//     path:'/*',
//     element:<h2>Error 404</h2>
//    },
//  ])
//  export default router



import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import ExploreArtworks from "../pages/ExploreArtworks";

import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";

import Register from "../pages/Register";
import { createBrowserRouter } from "react-router";
import AddArtWorks from "../pages/AddArtWorks";
import ArtworkDetail from "../pages/ArtworkDetail";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../contexts/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/artDetail/:id",
      //   element:<ArtworkDetail></ArtworkDetail>,
      //   loader:({params})=> fetch(`http://localhost:3000/artifys/${params.id}`)

      // },
      {
        path: "/artDetail/:id",
        element: <ArtworkDetail />,
        loader: ({ params }) => fetch(`http://localhost:3000/artifys/${params.id}`)
      },

      {
        path: "/addart",
        element:<PrivateRoute>
           <AddArtWorks></AddArtWorks>
        </PrivateRoute>
      },

      {
        path: "/exploreartworks",
        element: <ExploreArtworks></ExploreArtworks>,
        loader: () => fetch('http://localhost:3000/artifys')
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      },


    ],
  },
  {
    path: "/art",
    element: <h2>art layout</h2>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
]);

export default router;
