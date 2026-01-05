

// import React, { use } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { NavLink, useNavigate } from 'react-router';
// import { AuthContext } from '../contexts/AuthContext';
// import { updateProfile } from 'firebase/auth';
// import swal from 'sweetalert';
// import "sweetalert2/dist/sweetalert2.min.css";
// import Swal from 'sweetalert2';
// const Register = () => {
//   const { singInWithGoogle, createUser, setUser } = use(AuthContext);
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value.trim();
//     const photourl = form.photourl.value.trim();
//     const email = form.email.value.trim();
//     const password = form.password.value.trim();

//     if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
//       swal("Password must contain uppercase, lowercase and be at least 6 characters long.");
//       return;
//     }

//     createUser(email, password)
//       .then((result) => {
//         const user = result.user;
//       navigate('/');
        
//         updateProfile(user, {
//           displayName: name,
//           photoURL: photourl || "https://i.ibb.co/3rYVZ7H/default-user.png",
//         })
//           .then(() => {
        
//             setUser({
//               ...user,
//               displayName: name,
//               photoURL: photourl || "https://i.ibb.co/3rYVZ7H/default-user.png",
//             });

//           Swal.fire({
//               icon: "success",
//               title: "Registration Successful 🎉",
//               text: "Welcome to Artify!",
//               showConfirmButton: false,
//               timer: 1800,
//               timerProgressBar: true,
//             });
//             navigate('/'); 
//           })
//           .catch((error) => {
//             console.error("Profile update failed:", error);
//           });
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     singInWithGoogle()
//       .then((result) => {
//         console.log("Google Login Success:", result.user);
//         Swal.fire({
//           icon: "success",
//           title: "Welcome!",
//           text: "Signed up with Google successfully ",
//           showConfirmButton: false,
//           timer: 1800,
//           timerProgressBar: true,
//         });
//         navigate('/');
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   return (
//     <div className="card bg-base-100 w-full max-w-sm mt-36 mx-auto shadow-2xl">
//       <div className="card-body">
//         <h1 className="text-4xl font-bold text-center mb-4">Register now!</h1>
//         <form onSubmit={handleRegister}>
//           <label className="label">Name</label>
//           <input name="name" type="text" className="input input-bordered w-full mb-2" placeholder="Name" required />

//           <label className="label">Photo URL</label>
//           <input name="photourl" type="text" className="input input-bordered w-full mb-2" placeholder="Photo URL" />

//           <label className="label">Email</label>
//           <input name="email" type="email" className="input input-bordered w-full mb-2" placeholder="Email" required />

//           <label className="label">Password</label>
//           <input name="password" type="password" className="input input-bordered w-full mb-2" placeholder="Password" required />

//           <button type="submit" className="btn btn-neutral w-full mt-2">Register</button>

//           <div className="divider">OR</div>

//           <button
//             onClick={handleGoogleSignIn}
//             type="button"
//             className="btn btn-outline w-full flex items-center justify-center gap-2"
//           >
//             <FcGoogle /> Sign up with Google
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <NavLink className="underline text-blue-600" to="/auth/login">
//             Login
//           </NavLink>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import swal from "sweetalert";

const Register = () => {
  const { singInWithGoogle, createUser, setUser } = React.useContext(AuthContext);
  const navigate = useNavigate();
 

  // ===== Register with Email/Password =====
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photourl = form.photourl.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // Password validation
    if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      swal("Password must contain uppercase, lowercase and be at least 6 characters long.");
      return;
    }

    try {
      // 1️⃣ Firebase Auth
      const result = await createUser(email, password);
      const user = result.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photourl || "https://i.ibb.co/3rYVZ7H/default-user.png",
      });

      setUser({
        ...user,
        displayName: name,
        photoURL: photourl || "https://i.ibb.co/3rYVZ7H/default-user.png",
      });

      // 2️⃣ Backend MongoDB
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password, // send same password hashed in backend
          role: "user",
        }),
      });

      const data = await res.json();
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful 🎉",
          text: "Welcome to Artify!",
          showConfirmButton: false,
          timer: 1800,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Backend Error",
          text: data.error || "Failed to save user in DB",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    }
  };

  // ===== Google SignIn =====
  const handleGoogleSignIn = async () => {
    try {
      const result = await singInWithGoogle();
      const user = result.user;

      setUser(user);

      // Send Google user to backend
      const randomPassword = Math.random().toString(36).slice(-8);
      await fetch(`${import.meta.env.VITE_API_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          password: randomPassword, // backend will hash
          role: "user",
        }),
      });

      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "Signed up with Google successfully",
        showConfirmButton: false,
        timer: 1800,
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Google Sign-In Failed",
        text: err.message,
      });
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mt-36 mx-auto shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold text-center mb-4">Register now!</h1>
        <form onSubmit={handleRegister}>
          <label className="label">Name</label>
          <input name="name" type="text" className="input input-bordered w-full mb-2" placeholder="Name" required />

          <label className="label">Photo URL</label>
          <input name="photourl" type="text" className="input input-bordered w-full mb-2" placeholder="Photo URL" />

          <label className="label">Email</label>
          <input name="email" type="email" className="input input-bordered w-full mb-2" placeholder="Email" required />

          <label className="label">Password</label>
          <input name="password" type="password" className="input input-bordered w-full mb-2" placeholder="Password" required />

          <button type="submit" className="btn btn-neutral w-full mt-2">Register</button>

          <div className="divider">OR</div>

          <button
            type="button"
            className="btn btn-outline w-full flex items-center justify-center gap-2"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle /> Sign up with Google
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <NavLink className="underline text-blue-600" to="/auth/login">Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
