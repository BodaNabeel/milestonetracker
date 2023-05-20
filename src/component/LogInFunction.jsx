import React, { useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  setPersistence,
  signInWithRedirect,
} from "firebase/auth";
import { getDatabase, ref as sRef, update } from "firebase/database";
import { DataContext } from "../data/DataContext";

export default function LogInFunction() {
  const { userAuthenticationId, setUserAuthenticationId } =
    useContext(DataContext);
  const [userSigned, setUserSigned] = useState(false);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const user = auth.currentUser;
  const db = getDatabase();
  setPersistence(auth, browserLocalPersistence);

  const writeUserData = (name, e_mail, userId) => {
    update(sRef(db, `users/${userId}`), {
      userName: name,
      email: e_mail,
      userUid: userId,
    });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      localStorage.setItem("userIdentification", user.uid);
      setUserAuthenticationId(
        localStorage.getItem("userIdentification") || null
      );
      writeUserData(user.displayName, user.email, user.uid);
    } else {
      console.log("logged out");
      setUserAuthenticationId(null);
      localStorage.removeItem("userIdentification");
    }
  });
  const handleSignIn = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <button className="signin-btn" onClick={handleSignIn}>
      sign in now...!
    </button>
  );
}
