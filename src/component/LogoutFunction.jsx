import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { DataContext } from "../data/DataContext";

function LogoutFunction() {
  const { setUserAuthenticationId } = useContext(DataContext);
  const handleSignOut = () => {
    const auth = getAuth();
    auth.signOut();
  };

  return (
    <button
      style={{
        border: "none",
        backgroundColor: "transparent",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onClick={handleSignOut}
    >
      Logout
    </button>
  );
}

export default LogoutFunction;
