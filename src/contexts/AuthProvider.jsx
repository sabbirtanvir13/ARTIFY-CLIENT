import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
const googleProvider=new GoogleAuthProvider()
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

    const singInWithGoogle=()=>{
        setloading(true)
        return signInWithPopup(auth ,googleProvider)
    }

    const signOutUser=()=>{
        setloading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setloading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const authInfo={
     createUser,
     User,
     loading,
     singInUser,
     singInWithGoogle,
      signOutUser
     

    }
    return (
       <AuthContext value={authInfo}>
       { children}
       </AuthContext>
    );
};

export default AuthProvider;