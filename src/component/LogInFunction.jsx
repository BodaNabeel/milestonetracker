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

  // useEffect(() => {
  //   const handleRedirectResult = () => {
  // getRedirectResult(auth)
  //   .then((result) => {
  //     const user = result?.user;
  //     const localstorageUserId = localStorage.getItem("userIdentification");
  //     setUserSigned(true);
  //     if (user && user.uid !== localstorageUserId) {
  //       localStorage.setItem("userIdentification", user.uid);
  //       setUserAuthenticationId(
  //         localStorage.getItem("userIdentification") || null
  //       );
  //       writeUserData(user.displayName, user.email, user.uid);
  //     }
  //   })
  //   .catch((error) => {
  //     // Handle any error that occurred during redirect result retrieval
  //     console.error(error);
  //   });
  // };

  //   handleRedirectResult();
  // }, [userSigned]);

  getRedirectResult(auth)
    .then((result) => {
      const user = result?.user;
      const localstorageUserId = localStorage.getItem("userIdentification");
      setUserSigned(true);
      if (user && user.uid !== localstorageUserId) {
        localStorage.setItem("userIdentification", user.uid);
        setUserAuthenticationId(
          localStorage.getItem("userIdentification") || null
        );
        writeUserData(user.displayName, user.email, user.uid);
      }
    })
    .catch((error) => {
      // Handle any error that occurred during redirect result retrieval
      console.error(error);
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
