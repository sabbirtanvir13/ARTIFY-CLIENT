import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const {singInUser}=use(AuthContext)
    const handleLogin =(e)=>{
     e.preventDefault();
     const form =e.target
     const email =form.email.value;
     const password =form.password.value;
     console.log({email,password})
     singInUser(email,password)
     .then((result)=>{
      const user=result.User
      console.log(user)
     })
     .catch((error) => {
        alert(error.message);
      });


      }

  return (
    <div className='flex justify-center min-h-screen items-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="text-3xl font-bold p-4">Login now!</h1>
      <form onSubmit={handleLogin}  className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
     
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
               <p>Don't have an account ? <Link className='text-blue-500 hover:text-blue-900' to='/auth/register'>Register</Link></p>

                  <div className="divider">OR</div>
               
                         <button type="button"  className="btn btn-outline w-full flex items-center justify-center gap-2">
                           <FcGoogle/> Login with Google
                         </button>
        </fieldset>
      </form>
    </div>
    </div>
  );
};

export default Login;