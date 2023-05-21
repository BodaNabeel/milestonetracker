import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { DataContext } from "../data/DataContext";

function LogoutFunction() {
  const { setUserAuthenticationId } = useContext(DataContext);
  const handleSignOut = () => {
    const auth = getAuth();
    auth.signOut();
    localStorage.removeItem("userIdentification");
    localStorage.removeItem("sign_in_clicked");
    setUserAuthenticationId(null);
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
