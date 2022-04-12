import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';

const auth= getAuth(app)

const RequireAuth = ({children}) => {

          const [users] = useAuthState(auth)
          const location =useLocation()
          if(!users){

                    return <Navigate to="/login" state={{ from: location }} replace />;

          }
          return children;
};

export default RequireAuth;