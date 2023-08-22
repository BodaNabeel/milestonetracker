import React, { useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { getDatabase, ref as sRef, update } from "firebase/database";
import { DataContext } from "../data/DataContext";
import { ClipLoader } from "react-spinners";
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
      setUserAuthenticationId(null);
      localStorage.removeItem("userIdentification");
      localStorage.removeItem("sign_in_clicked");
    }
  });
  const handleSignIn = () => {
    signInWithPopup(auth, provider);
    localStorage.setItem("sign_in_clicked", true);
  };

  if (localStorage.getItem("sign_in_clicked")) {
    return (
      <button className="signin-btn-clicked">
        loading <ClipLoader color="white" size={10} />
      </button>
    );
  } else {
    return (
      <button className="signin-btn" onClick={handleSignIn}>
        sign in now...!
      </button>
    );
  }
}
