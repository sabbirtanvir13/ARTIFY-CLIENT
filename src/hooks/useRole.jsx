// import { useState, useEffect, useContext } from 'react'
// import useAxiosSecure from './useAxiosSecure'
// import { AuthContext } from '../contexts/AuthContext'

// const useRole = () => {
//   const { User, loading } = useContext(AuthContext) // <-- useContext ব্যবহার করতে হবে
//   const axiosSecure = useAxiosSecure()
//   const [role, setRole] = useState(null)
//   const [isRoleLoading, setIsRoleLoading] = useState(true)

//   useEffect(() => {
//     if (!loading &&  User?.email) {
//       setIsRoleLoading(true)
//       axiosSecure.get(`/user/role`)
//         .then(res => {
//           setRole(res.data.role)
//         })
//         .catch(err => {
//           console.error('Failed to fetch role:', err)
//           setRole(null)
//         })
//         .finally(() => setIsRoleLoading(false))
//     }
//   }, [ User, loading, axiosSecure])

//   return [role, isRoleLoading]
// }

// export default useRole
// // hooks/useRole.js
// // import { useState, useEffect } from "react";
// // import useAuth from "./useAuth";
// // import useAxiosSecure from "./useAxiosSecure";

// // const useRole = () => {
// //   const { user, loading } = useAuth();
// //   const axiosSecure = useAxiosSecure();

// //   const [role, setRole] = useState("user");
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchRole = async () => {
// //       if (!user?.email) {
// //         setRole("user");
// //         setIsLoading(false);
// //         return;
// //       }
// //       try {
// //         setIsLoading(true);
// //         const res = await axiosSecure.get("/user/role"); // endpoint on your server
// //         setRole(res.data.role || "user");
// //       } catch (err) {
// //         console.error("Failed to fetch role:", err);
// //         setRole("user");
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     if (!loading) fetchRole();
// //   }, [user, loading, axiosSecure]);

// //   return [role, isLoading];
// // };

// // export default useRole;


import { useState, useEffect } from "react";
import useAuth from "./useAuth";

const useRole = () => {
  const { User } = useAuth();
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      if (!User?.email) return;

      try {
        const token = await User.getIdToken(); // Firebase token
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("Failed to fetch role");
        const data = await res.json();

        setRole(data.role || "user"); // <-- MongoDB role
      } catch (err) {
        console.error(err);
        setRole("user"); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, [User]);

  return [role, loading];
};

export default useRole;
