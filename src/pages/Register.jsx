

// import React, { use, } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { NavLink } from 'react-router';
// import { AuthContext } from '../contexts/AuthContext';

// const Register = () => {
//   const { singInWithGoogle, createUser, setUser } = use(AuthContext);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const photourl = form.photourl.value;
//     const email = form.email.value;
//     const password = form.password.value;
//       console.log({name,email,password,photourl})
//     createUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         console.log("User created:", user);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     singInWithGoogle()
//       .then((result) => {
//         console.log("Google Login Success:", result.user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="card bg-base-100 w-full max-w-sm mt-36 mx-auto shadow-2xl">
//       <div className="card-body">
//         <h1 className="text-4xl font-bold text-center mb-4">Register now!</h1>
//         <form onSubmit={handleRegister}>
//           <label className="label">Name</label>
//           <input name="name" type="text" className="input input-bordered w-full mb-2" placeholder="Name" />

//           <label className="label">Photo URL</label>
//           <input name="photourl" type="text" className="input input-bordered w-full mb-2" placeholder="Photo URL" />

//           <label className="label">Email</label>
//           <input name="email" type="email" className="input input-bordered w-full mb-2" placeholder="Email" />

//           <label className="label">Password</label>
//           <input name="password" type="password" className="input input-bordered w-full mb-2" placeholder="Password" />

//           <button type="submit" className="btn btn-neutral w-full mt-2">Register</button>

//           <div className="divider">OR</div>

//           <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline w-full flex items-center justify-center gap-2">
//             <FcGoogle /> Login with Google
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


import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import swal from 'sweetalert';

const Register = () => {
  const { singInWithGoogle, createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photourl = form.photourl.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      swal("Password must contain uppercase, lowercase and be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
      navigate('/');
        
        updateProfile(user, {
          displayName: name,
          photoURL: photourl || "https://i.ibb.co/3rYVZ7H/default-user.png",
        })
          .then(() => {
        
            setUser({
              ...user,
              displayName: name,
              photoURL: photourl || "https://i.ibb.co/3rYVZ7H/default-user.png",
            });

            alert("Registration successful!");
            navigate('/'); 
          })
          .catch((error) => {
            console.error("Profile update failed:", error);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then((result) => {
        console.log("Google Login Success:", result.user);
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
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
            onClick={handleGoogleSignIn}
            type="button"
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FcGoogle /> Sign up with Google
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <NavLink className="underline text-blue-600" to="/auth/login">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;

