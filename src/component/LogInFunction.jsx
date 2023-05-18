import React, { useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAuth,
  getRedirectResult,
  setPersistence,
  signInWithRedirect,
} from "firebase/auth";
import { getDatabase, ref as sRef, update } from "firebase/database";
import { DataContext } from "../data/DataContext";

export default function LogInFunction() {
  const { setUserId, setUser, user } = useContext(DataContext);
  const [userSigned, setUserSigned] = useState(false);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const db = getDatabase();
  setPersistence(auth, browserLocalPersistence);

  const writeUserData = (name, e_mail, userId) => {
    update(sRef(db, `users/${userId}`), {
      userName: name,
      email: e_mail,
      userUid: userId,
    });
  };

  useEffect(() => {
    const handleRedirectResult = () => {
      getRedirectResult(auth)
        .then((result) => {
          const user = result.user;
          const localstorageUserId = localStorage.getItem("userIdentification");
          setUserSigned(true);
          if (user && user.uid !== localstorageUserId) {
            localStorage.setItem("userIdentification", user.uid);
            writeUserData(user.displayName, user.email, user.uid);
            console.log(user.uid, localstorageUserId);
          }
        })
        .catch((error) => {
          // Handle any error that occurred during redirect result retrieval
          console.error(error);
        });
    };

    handleRedirectResult();
  }, [userSigned]);

  const handleSignIn = () => {
    signInWithRedirect(auth, provider);
  };

  const handleSignOut = () => {
    auth.signOut();
    localStorage.removeItem("userIdentification");
    setUserSigned(false);
  };

  return (
    <>
      {userSigned ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </>
  );
}
