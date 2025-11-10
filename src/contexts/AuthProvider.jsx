import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [User,setUser]=useState(null);
    const [loading,setloading]=useState(true);

    const createUser=(email ,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singInUser=(email,password)=>{
         setloading(true);
    return signInWithEmailAndPassword(auth ,email,password)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const authInfo={
     createUser,
     User,
     loading,
     singInUser

    }
    return (
       <AuthContext value={authInfo}>
       { children}
       </AuthContext>
    );
};

export default AuthProvider;