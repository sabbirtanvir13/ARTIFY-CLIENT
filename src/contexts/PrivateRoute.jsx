// import React, { use } from 'react';
// import { AuthContext } from './AuthContext';
// import { Navigate } from 'react-router';

// const PrivateRoute = ({children}) => {
//     const {User,loding}=use(AuthContext)
//     // console.log(User)


//   if(loding){
//     return <span className="loading loading-spinner text-success"></span>
//   }

//     if(User&&User?.email){
//     return children;
//     }

//     return <Navigate to='/auth/login'></Navigate>

 

// };

// export default PrivateRoute;

import React, { use,  } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { User, loading } = use(AuthContext);
  const location = useLocation();


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  if (User) {
    return children;
  }

  return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
