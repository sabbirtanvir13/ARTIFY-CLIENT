import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className='flex justify-center min-h-screen items-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="text-3xl font-bold p-4">Login now!</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
     
          <button className="btn btn-neutral mt-4">Login</button>
               <p>Don't have an account ? <Link className='text-blue-500 hover:text-blue-900' to='/auth/register'>Register</Link></p>

                  <div className="divider">OR</div>
               
                         <button type="button"  className="btn btn-outline w-full flex items-center justify-center gap-2">
                           <FcGoogle/> Login with Google
                         </button>
        </fieldset>
      </div>
    </div>
    </div>
  );
};

export default Login;