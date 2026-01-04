// src/hooks/useChangePassword.js

import { updatePassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const useChangePassword = () => {
  const changePassword = async (newPassword) => {
    if (!auth.currentUser) return;
    try {
      await updatePassword(auth.currentUser, newPassword);
      alert("Password changed successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to change password: " + error.message);
    }
  };

  return { changePassword };
};

export default useChangePassword;
