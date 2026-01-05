


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
import MyGallery from "../pages/MyGallery";
import MyFavorites from "../pages/MyFavorites";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import DashboardOverview from "../components/DashboardOverview";

import ContactSection from "../pages/ContactSection";
import AboutSection from "../pages/AboutSection";
import MyLikes from "../pages/MyLikes";
// import AboutSection from "../pages/AboutSection";
// import UserDashboardOverview from "../components/UserDashboardOverview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
       
      },
 
      {
        path: "/artDetail/:id",
        element: 
          <ArtworkDetail />,
     
        loader: ({ params }) => fetch(`https://artify-server-ecru.vercel.app/artifys/${params.id}`)
      },

    { path: "about", element: <AboutSection/> },
      { path: "contact", element: <ContactSection /> },



      {
        path: "/exploreartworks",
        element: <ExploreArtworks></ExploreArtworks>,
        loader: () => fetch('https://artify-server-ecru.vercel.app/artifys')
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
  path: '/dashboard',
  element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
  children: [
    {
      path: "addart",
      element: <AddArtWorks />
    },
       {
        path: "gallery",
        element:<PrivateRoute>
         <MyGallery></MyGallery>
        </PrivateRoute>
      },
       {
        path: "profile",
        element:<PrivateRoute>
       <Profile></Profile>
        </PrivateRoute>
      },

     {
        path: "favorites",
        element:<PrivateRoute>
          <MyFavorites></MyFavorites>
        </PrivateRoute>
      },
     {
        path: "DashboardOverview",
        element:<PrivateRoute>
      <DashboardOverview></DashboardOverview>
        </PrivateRoute>
      },
     {
        path: "my-likes",
        element:<PrivateRoute>
        <MyLikes></MyLikes>
        </PrivateRoute>
      },


  ]
},

  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
]);

export default router;
