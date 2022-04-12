import React from "react";

const Register = () => {
  return (
    <div>
              <h3 className="text-center mt-4">Please Register</h3>
      <div className="w-50 mx-auto mt-4">
      <form>

      <div className="mb-3">
    <label   className="form-label">Your Name</label>
    <input type="text" className="form-control" placeholder="Your Name" />
   </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" placeholder="Your Email" />
  </div>
  <div className="mb-3">
    <label   className="form-label">Password</label>
    <input type="password" className="form-control" placeholder="Your Password"  />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input"  />
    <label className="form-check-label"  >Check me out</label>
  </div>
  {/* <button type="submit" className="btn btn-primary">Submit</button> */}
  <input type="submit" className="btn btn-primary" value="Register"/>
</form> 

      </div>
    </div>
  );
};

export default Register;
