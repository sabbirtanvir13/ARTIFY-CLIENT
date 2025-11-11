// import React, { use } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { NavLink } from 'react-router';
// import { AuthContext } from '../contexts/AuthContext';

// const Register = () => {
//   const {singInWithGoogle,createUser,setUser}=use(AuthContext)


// const handleRegister = (e) => {
//     e.preventDefault();
//     // console.log(e.target)
//     const from = e.target
//     const name = from.name.value;
//     const photourl = from.photourl.value;
//     const email = from.email.value;
//     const password = from.password.value;
//      console.log({name,photourl,email,password})
//      createUser(email,password)
//      .then(result=>{
//       const User=result.User;
//       setUser(User)
//       // console.log(user)
//      })
//      .catch((error)=>{
//       const errorCode=error.code;
//       const errorMessage=error.message
//       alert(errorMessage)
//      })
//     // const uppercaseReg = /[A-Z]/;
//     // const lowercaseReg = /[a-z]/;

//     // if (!uppercaseReg.test(password)) {
//     //   setError("Password must have at least one uppercase letter");
//     //   return;
//     // }

//     // if (!lowercaseReg.test(password)) {
//     //   setError("Password must have at least one lowercase letter");
//     //   return;
//     // }

//     // if (password.length < 6) {
//     //   setError("Password must be at least 6 characters long");
//     //   return;
//     // }
//   }

//   const handleGoogleSignIn=()=>{
//   singInWithGoogle()
//   .then(result=>{
//     console.log(result)
//   })
//   .catch(error=>{
//     console.log(error)
//   })
//   }
//     return (
//        <div className="card bg-base-100 w-full max-w-sm mt-36 mx-auto shadow-2xl">
//       <div className="card-body">
//         <h1 className="text-4xl font-bold text-center mb-4">Register now!</h1>
//         <form onSubmit={handleRegister}>
//           {/* Name */}
//           <label className="label">Name</label>
//           <input name="name" required type="text" className="input input-bordered w-full mb-2" placeholder="Name" />

//           {/* Photo URL */}
//           <label className="label">Photo URL</label>
//           <input name="photourl" required type="text" className="input input-bordered w-full mb-2" placeholder="Photo URL" />

//           {/* Email */}
//           <label className="label">Email</label>
//           <input name="email" required type="email" className="input input-bordered w-full mb-2" placeholder="Email" />

//           {/* Password */}
//           <label className="label">Password</label>
//           <input name="password" required type="password" className="input input-bordered w-full mb-2" placeholder="Password" />

          
       
//           <button type="submit" className="btn btn-neutral w-full mt-2">Register</button>

//           <div className="divider">OR</div>

//           <button onClick={handleGoogleSignIn} type="button"  className="btn btn-outline w-full flex items-center justify-center gap-2">
//             <FcGoogle/> Login with Google
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
//     );
// };

// export default Register;



import React, { use, } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Register = () => {
  const { singInWithGoogle, createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photourl = form.photourl.value;
    const email = form.email.value;
    const password = form.password.value;
      console.log({name,email,password,photourl})
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("User created:", user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then((result) => {
        console.log("Google Login Success:", result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mt-36 mx-auto shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold text-center mb-4">Register now!</h1>
        <form onSubmit={handleRegister}>
          <label className="label">Name</label>
          <input name="name" type="text" className="input input-bordered w-full mb-2" placeholder="Name" />

          <label className="label">Photo URL</label>
          <input name="photourl" type="text" className="input input-bordered w-full mb-2" placeholder="Photo URL" />

          <label className="label">Email</label>
          <input name="email" type="email" className="input input-bordered w-full mb-2" placeholder="Email" />

          <label className="label">Password</label>
          <input name="password" type="password" className="input input-bordered w-full mb-2" placeholder="Password" />

          <button type="submit" className="btn btn-neutral w-full mt-2">Register</button>

          <div className="divider">OR</div>

          <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline w-full flex items-center justify-center gap-2">
            <FcGoogle /> Login with Google
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
