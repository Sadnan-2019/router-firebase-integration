import { useEffect, useState } from "react";

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [users, setUser] = useState({});

  const signInWithGoogle = () => {
    // console.log("sign in soon")
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignout=()=>{

          signOut(auth)
          .then(()=>{

                    console.log("sign out success")

          })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      setUser(users);
    });
  }, []);

  return { users, signInWithGoogle,handleSignout };
};

export default useFirebase;
