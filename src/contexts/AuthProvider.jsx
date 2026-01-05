

import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    User,
    setUser,
    loading,
    singInUser,
    singInWithGoogle,
    signOutUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



// import { useEffect, useState } from "react";
// import { AuthContext } from "./AuthContext";
// import {
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../firebase/firebase.init";

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) =>
//     createUserWithEmailAndPassword(auth, email, password);

//   const signInUser = (email, password) =>
//     signInWithEmailAndPassword(auth, email, password);

//   const signInWithGoogle = () =>
//     signInWithPopup(auth, googleProvider);

//   const logOut = () => signOut(auth);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, currentUser => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         createUser,
//         signInUser,
//         signInWithGoogle,
//         logOut,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;



// import React, {  useState, useEffect } from "react";
// import { auth } from "../firebase/firebase.init";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [User, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null); // <-- Firebase token

//   const createUser = async (email, password) => {
//     setLoading(true);
//     const result = await createUserWithEmailAndPassword(auth, email, password);
//     const idToken = await result.user.getIdToken();
//     setToken(idToken);
//     setUser(result.user);
//     setLoading(false);
//     return result;
//   };

//   const singInUser = async (email, password) => {
//     setLoading(true);
//     const result = await signInWithEmailAndPassword(auth, email, password);
//     const idToken = await result.user.getIdToken();
//     setToken(idToken);
//     setUser(result.user);
//     setLoading(false);
//     return result;
//   };

//   const singInWithGoogle = async () => {
//     setLoading(true);
//     const result = await signInWithPopup(auth, googleProvider);
//     const idToken = await result.user.getIdToken();
//     setToken(idToken);
//     setUser(result.user);
//     setLoading(false);
//     return result;
//   };

//   const signOutUser = async () => {
//     setLoading(true);
//     await signOut(auth);
//     setUser(null);
//     setToken(null);
//     setLoading(false);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       setUser(currentUser);
//       if (currentUser) {
//         const idToken = await currentUser.getIdToken();
//         setToken(idToken);
//       } else {
//         setToken(null);
//       }
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const authInfo = {
//     User,
//     loading,
//     token, // <-- এখন এখানে token আছে
//     createUser,
//     singInUser,
//     singInWithGoogle,
//     signOutUser,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
