import { getAuth,signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import app from "../../firebase.init";
// import useFirebase from "../../hooks/useFirebase";
import "./Header.css";
const auth = getAuth(app)

const Header = () => {
  // const { users, handleSignout } = useFirebase();
  const [users] = useAuthState(auth)
  // console.log(users)

  return (
    <div>
      <nav className="navigation">
        <div className=" d-flex justify-content-between ">
        <div > 
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/register">Regsiter</NavLink>
          </div>
        <div className="d-flex align-items-center" >
        <span className="text-light me-2">
            {users?.displayName ? users.displayName : ""}
          </span>
          {users?.uid ? (
            <button onClick={()=>signOut(auth)} className="btn btn-warning me-2">
            
              Sign Out
            </button>
          ) : (
            <NavLink to="/login" >Login</NavLink>
          )}
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
