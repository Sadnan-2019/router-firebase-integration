import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
// import {} from 'react-firebase-hooks'
// import { signInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {

          // const {signInWithGoogle} = useFirebase()
          const [signInWithGoogle,users] =  useSignInWithGoogle(auth)
          const navigate =useNavigate();
          const location = useLocation();
          let from=location.state.from.pathname || "/";

          const handleSignIn=()=>{
            signInWithGoogle()
            .then(()=>{
              navigate(from,{replace:true})

            })


          }


          return (
                    <div>

                              <h3 className="text-center mt-4">Please Login</h3>
                              <div className='App'>
                              <button onClick={handleSignIn} className='btn btn-success'>Sign in With Google</button>
                              </div>
                            
                        <div className="w-50 mx-auto mt-4">
                        
      <form>

    
  <div className="mb-3">
    <label   className="form-label">Email address</label>
    <input type="email" className="form-control" placeholder="Your Email" />
  </div>
  <div className="mb-3">
    <label   className="form-label">Password</label>
    <input type="password" className="form-control" placeholder="Your Password"  />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label"  >Check me out</label>
  </div>
  {/* <button type="submit" className="btn btn-primary">Submit</button> */}
  <input type="submit" className="btn btn-primary" value="Login"/>
</form> 

      </div>
                    </div>
          );
};

export default Login;