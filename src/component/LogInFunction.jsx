import React, { useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithRedirect,
} from "firebase/auth";
import { getDatabase, ref as sRef, set, update } from "firebase/database";
import { DataContext } from "../data/DataContext";
export default function LogInFunction() {
  const userLoggedIn = localStorage.getItem("userIdentification");
  const { setUserId, setUser, user } = useContext(DataContext);

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
    const unsubscribe = auth.onAuthStateChanged((user_) => {
      const localstorageUserId = localStorage.getItem("userIdentification");

      if (user_.uid !== localstorageUserId) {
        console.log(user_);
        setUser(user_);
        setUserId(user_.uid);
        localStorage.setItem("userIdentification", user_.uid);
        writeUserData(user_.displayName, user_.email, user_.uid);
      }
    });
    return unsubscribe;
  }, []);

  const handleSignIn = () => {
    signInWithRedirect(auth, provider);
  };
  const handleSignOut = () => {
    auth.signOut();
    localStorage.removeItem("userIdentification");
  };
  return (
    <>
      {userLoggedIn ? (
        <button onClick={handleSignOut}>sign out</button>
      ) : (
        <button onClick={handleSignIn}>sign in</button>
      )}
    </>
  );
}
