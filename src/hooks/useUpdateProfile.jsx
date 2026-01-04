// src/hooks/useUpdateProfile.js

import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const useUpdateProfile = () => {
  const updateUserProfile = async ({ displayName, photoURL }) => {
    if (!auth.currentUser) return;
    try {
      await updateProfile(auth.currentUser, { displayName, photoURL });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile: " + error.message);
    }
  };

  return { updateUserProfile };
};

export default useUpdateProfile;
