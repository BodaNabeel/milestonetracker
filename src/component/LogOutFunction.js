import { getAuth } from "firebase/auth";


const handleSignOut = () => {
  
  console.log("working")
  const auth = getAuth();
  console.log(auth.signOut())
  auth.signOut();
  localStorage.removeItem("userIdentification");

};

export default handleSignOut;
