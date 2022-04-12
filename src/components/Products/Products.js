import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth=getAuth(app)

const Products = () => {

          const [users] = useAuthState(auth)
          return (
                    <div className='App'>
                           <h4>This is product</h4> 
                           
                              <p>
                              {
                                        users?.uid ? users.displayName : ""
                              }
                              </p>
                           
                    </div>
          );
};

export default Products;