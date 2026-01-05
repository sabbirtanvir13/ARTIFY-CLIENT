// import useAuth from "../hooks/useAuth"
// import useRole from "../hooks/useRole"

// const Profile = () => {
//   const { User } = useAuth()
//   const [role, isRoleLoading] = useRole()
//   // const { role, isRoleLoading } = useRole()
//   console.log(role, isRoleLoading)
//   return (
//     <div className='flex justify-center items-center h-screen'>
//       <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
      
//         <div className='flex flex-col items-center justify-center p-4 -mt-16'>
//           <a href='#' className='relative block'>
//             <img
//               alt='profile'
//               src={User?.photoURL}
//               className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
//             />
//           </a>

//           <p className='p-2 px-4 text-xs text-white bg-lime-500 rounded-full'>
//             {role}
//           </p>
//           <div className='w-full p-2 mt-4 rounded-lg'>
//             <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
//               <p className='flex flex-col'>
//                 Name
//                 <span className='font-bold text-gray-600 '>
//                   {User?.displayName}
//                 </span>
//               </p>
//               <p className='flex flex-col'>
//                 Email
//                 <span className='font-bold text-gray-600 '>{User?.email}</span>
//               </p>

//               <div>
//                 <button className='bg-lime-500  px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-lime-800 block mb-1'>
//                   Update Profile
//                 </button>
//                 <button className='bg-lime-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-lime-800'>
//                   Change Password
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Profile


import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import useUpdateProfile from "../hooks/useUpdateProfile";
import useChangePassword from "../hooks/useChangePassword";
import { useState } from "react";

const Profile = () => {
  const { User } = useAuth();
  const [role, isRoleLoading] = useRole();
  const { updateUserProfile } = useUpdateProfile();
  const { changePassword } = useChangePassword();

  const [newDisplayName, setNewDisplayName] = useState(User?.displayName || "");
  const [newPhotoURL, setNewPhotoURL] = useState(User?.photoURL || "");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdateProfile = () => {
    updateUserProfile({ displayName: newDisplayName, photoURL: newPhotoURL });
  };

  const handleChangePassword = () => {
    if (!newPassword) return alert("Enter a new password!");
    changePassword(newPassword);
    setNewPassword(""); // clear input
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={User?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white"
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-lime-500 rounded-full">
            {role}
          </p>

          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-col gap-4 text-sm text-gray-600">
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  type="text"
                  value={newDisplayName}
                  onChange={(e) => setNewDisplayName(e.target.value)}
                  className="input input-bordered"
                />
              </div>

              <div className="flex flex-col">
                <label>Photo URL</label>
                <input
                  type="text"
                  value={newPhotoURL}
                  onChange={(e) => setNewPhotoURL(e.target.value)}
                  className="input input-bordered"
                />
              </div>

              <button
                onClick={handleUpdateProfile}
                className="bg-lime-500 px-10 py-2 rounded-lg text-white cursor-pointer hover:bg-lime-800"
              >
                Update Profile
              </button>

              <div className="flex flex-col">
                <label>New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="input input-bordered"
                  placeholder="Enter new password"
                />
              </div>

              <button
                onClick={handleChangePassword}
                className="bg-lime-500 px-10 py-2 rounded-lg text-white cursor-pointer hover:bg-lime-800"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
