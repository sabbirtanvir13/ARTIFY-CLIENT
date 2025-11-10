import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router';

const Register = () => {
    return (
       <div className="card bg-base-100 w-full max-w-sm mt-36 mx-auto shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold text-center mb-4">Register now!</h1>
        <form >
          {/* Name */}
          <label className="label">Name</label>
          <input name="name" required type="text" className="input input-bordered w-full mb-2" placeholder="Name" />

          {/* Photo URL */}
          <label className="label">Photo URL</label>
          <input name="photourl" required type="text" className="input input-bordered w-full mb-2" placeholder="Photo URL" />

          {/* Email */}
          <label className="label">Email</label>
          <input name="email" required type="email" className="input input-bordered w-full mb-2" placeholder="Email" />

          {/* Password */}
          <label className="label">Password</label>
          <input name="password" required type="password" className="input input-bordered w-full mb-2" placeholder="Password" />

          <div className="mb-2">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>

       
          <button type="submit" className="btn btn-neutral w-full mt-2">Register</button>

          <div className="divider">OR</div>

          <button type="button"  className="btn btn-outline w-full flex items-center justify-center gap-2">
            <FcGoogle/> Login with Google
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