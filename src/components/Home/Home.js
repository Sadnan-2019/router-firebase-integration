import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth=getAuth(app)

const Home = () => {

      const [users] = useAuthState(auth)


          return (
                    <div className='App'>
                          <h3>This is Home</h3>
                          
                                <h4>

                                    {
                                            users?.uid ? users.displayName  :  ""
                                    }
                                </h4>
                                
                              
                    </div>
          );
};

export default Home;