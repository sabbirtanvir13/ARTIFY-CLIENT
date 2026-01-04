

import React, { use,} from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const Login = () => {
  const {  singInUser, singInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

   singInUser(email, password)
      .then((result) => {
        console.log("Logged in user:", result.user);
          Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          text: "Login successful ",
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
        navigate("/"); 
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then((result) => {
        console.log("Google login success:", result.user);
          Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          text: "Login successful ",
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
        navigate("/"); 
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold p-4 text-center">Login now!</h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              required
              className="input input-bordered"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              required
              className="input input-bordered"
              placeholder="Password"
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Login
            </button>

            <p className="text-center mt-3">
              Don’t have an account?{" "}
              <Link
                className="text-blue-500 hover:text-blue-900"
                to="/auth/register"
              >
                Register
              </Link>
            </p>

            <div className="divider">OR</div>

            <button
              onClick={handleGoogleLogin}
              type="button"
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <FcGoogle /> Login with Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;


// import React, { useContext } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../contexts/AuthContext";
// import Swal from "sweetalert2";

// const Login = () => {
//   const { signInUser, signInWithGoogle } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     signInUser(email, password)
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Login Successful",
//           timer: 1500,
//           showConfirmButton: false,
//         });
//         navigate("/");
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Login Failed",
//           text: error.message,
//         });
//       });
//   };

//   const handleGoogleLogin = () => {
//     signInWithGoogle()
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Google Login Successful",
//           timer: 1500,
//           showConfirmButton: false,
//         });
//         navigate("/");
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   return (
//     <div className="flex justify-center min-h-screen items-center">
//       <div className="card w-full max-w-sm shadow-2xl bg-base-100">
//         <h1 className="text-3xl font-bold text-center p-4">Login</h1>

//         <form onSubmit={handleLogin} className="card-body">
//           <input name="email" type="email" required className="input input-bordered" placeholder="Email" />
//           <input name="password" type="password" required className="input input-bordered" placeholder="Password" />

//           <button className="btn btn-neutral mt-4">Login</button>

//           <p className="text-center mt-3">
//             Don’t have an account?{" "}
//             <Link to="/auth/register" className="text-blue-500">Register</Link>
//           </p>

//           <div className="divider">OR</div>

//           <button type="button" onClick={handleGoogleLogin} className="btn btn-outline">
//             <FcGoogle /> Login with Google
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React from "react";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router";
// import useAuth from "../hooks/useAuth";
// import Swal from "sweetalert2";

// const Login = () => {
//   const { signInUser, signInWithGoogle } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     signInUser(email, password)
//       .then(() => {
//         Swal.fire({ icon: "success", title: "Logged in!", timer: 1200, showConfirmButton: false });
//         navigate("/");
//       })
//       .catch(err => Swal.fire({ icon: "error", title: "Login Failed", text: err.message }));
//   };

//   const handleGoogleLogin = () => {
//     signInWithGoogle()
//       .then(() => {
//         Swal.fire({ icon: "success", title: "Logged in!", timer: 1200, showConfirmButton: false });
//         navigate("/");
//       })
//       .catch(err => Swal.fire({ icon: "error", title: "Login Failed", text: err.message }));
//   };

//   return (
//     <div className="flex justify-center min-h-screen items-center">
//       <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
//         <h1 className="text-3xl font-bold p-4 text-center">Login now!</h1>
//         <form onSubmit={handleLogin} className="card-body">
//           <label className="label">Email</label>
//           <input name="email" type="email" required className="input input-bordered" />
//           <label className="label">Password</label>
//           <input name="password" type="password" required className="input input-bordered" />
//           <button type="submit" className="btn btn-neutral mt-4 w-full">Login</button>
//           <p className="text-center mt-3">
//             Don’t have an account? <Link className="text-blue-500" to="/auth/register">Register</Link>
//           </p>
//           <div className="divider">OR</div>
//           <button onClick={handleGoogleLogin} type="button" className="btn btn-outline w-full flex items-center justify-center gap-2">
//             <FcGoogle /> Login with Google
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

