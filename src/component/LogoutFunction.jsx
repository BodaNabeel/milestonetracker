import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { DataContext } from "../data/DataContext";

function LogoutFunction() {
    const {setUserAuthenticationId} = useContext(DataContext)
  const handleSignOut = () => {
    const auth = getAuth();
    auth.signOut();
    localStorage.removeItem("userIdentification");
    setUserAuthenticationId(null)
  };
  
  return <button onClick={handleSignOut}>Logout</button>;
}

export default LogoutFunction;
