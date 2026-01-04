// import React, { useState, useEffect } from "react";
// import useAuth from "../hooks/useAuth";
// import useUpdateProfile from "../hooks/useUpdateProfile";
// import useChangePassword from "../hooks/useChangePassword";

// const Profile = () => {
//   const { User } = useAuth();
//   const { updateUserProfile } = useUpdateProfile();
//   const { changePassword } = useChangePassword();

//   const [name, setName] = useState(User?.displayName || "");
//   const [photoURL, setPhotoURL] = useState(User?.photoURL || "");
//   const [newPassword, setNewPassword] = useState("");
//   const [role, setRole] = useState(""); 
//   // const [loading, setLoading] = useState(true);

//   // Fetch role from backend
//   useEffect(() => {
//     const fetchRole = async () => {
//       try {
//         if (!User) return;
//         const token = await User.getIdToken();
//         const res = await fetch(`http://localhost:3000/users/profile`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!res.ok) throw new Error("Failed to fetch profile");

//         const data = await res.json();
//         console.log("Profile data:", data); // debug
//         setRole(data.role || "user");
//         setName(data.name || data.displayName || "");
//         setPhotoURL(data.photoURL || "");
//       } catch (err) {
//         console.error("Error fetching role:", err);
//         setRole("user");
//       } finally {
//         // setLoading(false);
//       }
//     };

//     if (User?.email) fetchRole();
//   }, [User]);

//   const handleUpdateProfile = async () => {
//     await updateUserProfile({ displayName: name, photoURL });
//     alert("Profile updated!");
//   };

//   const handleChangePassword = async () => {
//     if (!newPassword) return alert("Enter a new password!");
//     await changePassword(newPassword);
//     alert("Password changed!");
//     setNewPassword("");
//   };

//   // if (loading) return <p className="text-center mt-10">Loading profile...</p>;

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5 p-6">
//         <h2 className="text-xl font-bold mb-4 text-center">Profile</h2>

//         {/* Profile Image */}
//         <div className="flex justify-center mb-4">
//           <img
//             src={photoURL || "https://i.ibb.co/3rYVZ7H/default-user.png"}
//             alt="Profile"
//             className="rounded-full h-24 w-24 border-2 border-white"
//           />
//         </div>

//         {/* User Info */}
//         <div className="mb-4 text-center">
//           <p className="mb-2">
//             <span className="font-semibold">Role:</span> {role}
//           </p>
//           <p className="mb-2">
//             <span className="font-semibold">Email:</span> {User?.email}
//           </p>
//         </div>

//         {/* Profile Update */}
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border p-2 w-full mb-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Photo URL"
//             value={photoURL}
//             onChange={(e) => setPhotoURL(e.target.value)}
//             className="border p-2 w-full mb-2 rounded"
//           />
//           <button
//             onClick={handleUpdateProfile}
//             className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-800 w-full"
//           >
//             Update Profile
//           </button>
//         </div>

//         {/* Change Password */}
//         <div>
//           <input
//             type="password"
//             placeholder="New Password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="border p-2 w-full mb-2 rounded"
//           />
//           <button
//             onClick={handleChangePassword}
//             className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-800 w-full"
//           >
//             Change Password
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// // import { useState } from "react";
// // import useAuth from "../hooks/useAuth";
// // import useRole from "../hooks/useRole";

// // const Profile = () => {
// //   const { User } = useAuth();
// //   const [role, isRoleLoading] = useRole();

// //   const [name, setName] = useState(User?.displayName || "");
// //   const [photoURL, setPhotoURL] = useState(User?.photoURL || "");
// //   const [newPassword, setNewPassword] = useState("");

// //   const handleUpdateProfile = async () => {
// //     if (!User) return;
// //     try {
// //       await User.updateProfile({ displayName: name, photoURL });
// //       alert("Profile updated!");
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to update profile: " + err.message);
// //     }
// //   };

// //   const handleChangePassword = async () => {
// //     if (!newPassword) return alert("Enter a new password!");
// //     try {
// //       await User.updatePassword(newPassword);
// //       alert("Password changed!");
// //       setNewPassword("");
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to change password: " + err.message);
// //     }
// //   };

// //   if (!User || isRoleLoading) {
// //     return <p className="text-center mt-10">Loading profile...</p>;
// //   }

// //   return (
// //     <div className="flex justify-center items-center h-screen bg-gray-100">
// //       <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5 p-6">
// //         <h2 className="text-xl font-bold mb-4 text-center">Profile</h2>

// //         {/* Profile Image */}
// //         <div className="flex justify-center mb-4">
// //           <img
// //             src={photoURL || "https://i.ibb.co/3rYVZ7H/default-user.png"}
// //             alt="Profile"
// //             className="rounded-full h-24 w-24 border-2 border-white"
// //           />
// //         </div>

// //         {/* User Info */}
// //         <div className="mb-4 text-center">
// //           <p className="mb-2"><span className="font-semibold">Role:</span> {role}</p>
// //           <p className="mb-2"><span className="font-semibold">Email:</span> {User.email}</p>
// //         </div>

// //         {/* Profile Update */}
// //         <div className="mb-4">
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             value={name}
// //             onChange={e => setName(e.target.value)}
// //             className="border p-2 w-full mb-2 rounded"
// //           />
// //           <input
// //             type="text"
// //             placeholder="Photo URL"
// //             value={photoURL}
// //             onChange={e => setPhotoURL(e.target.value)}
// //             className="border p-2 w-full mb-2 rounded"
// //           />
// //           <button
// //             onClick={handleUpdateProfile}
// //             className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-800 w-full"
// //           >
// //             Update Profile
// //           </button>
// //         </div>

// //         {/* Change Password */}
// //         <div>
// //           <input
// //             type="password"
// //             placeholder="New Password"
// //             value={newPassword}
// //             onChange={e => setNewPassword(e.target.value)}
// //             className="border p-2 w-full mb-2 rounded"
// //           />
// //           <button
// //             onClick={handleChangePassword}
// //             className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-800 w-full"
// //           >
// //             Change Password
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;


import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const Profile = () => {
  const { User } = useAuth();
  const [role, isRoleLoading] = useRole();

  const [name, setName] = useState(User?.displayName || "");
  const [photoURL, setPhotoURL] = useState(User?.photoURL || "");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdateProfile = async () => {
    if (!User) return;
    try {
      await User.updateProfile({ displayName: name, photoURL });
      alert("Profile updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile: " + err.message);
    }
  };

  const handleChangePassword = async () => {
    if (!newPassword) return alert("Enter a new password!");
    try {
      await User.updatePassword(newPassword);
      alert("Password changed!");
      setNewPassword("");
    } catch (err) {
      console.error(err);
      alert("Failed to change password: " + err.message);
    }
  };

  if (!User || isRoleLoading) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5 p-6">
        <h2 className="text-xl font-bold mb-4 text-center">Profile</h2>

        <div className="flex justify-center mb-4">
          <img
            src={photoURL || "https://i.ibb.co/3rYVZ7H/default-user.png"}
            alt="Profile"
            className="rounded-full h-24 w-24 border-2 border-white"
          />
        </div>

        <div className="mb-4 text-center">
          <p className="mb-2">
            <span className="font-semibold">Role:</span> {role}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> {User.email}
          </p>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <button
            onClick={handleUpdateProfile}
            className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-800 w-full"
          >
            Update Profile
          </button>
        </div>

        <div>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <button
            onClick={handleChangePassword}
            className="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-800 w-full"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
