import { getAuth } from "firebase/auth";


const handleSignOut = () => {
  
  const auth = getAuth();
  auth.signOut();
  localStorage.removeItem("userIdentification");

};

export default handleSignOut;
