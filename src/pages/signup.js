import React from "react";
import { useHistory } from "react-router-dom";

import RenderSignupForm from "../components/RenderSignupForm";

const Signup = () => {
  const history = useHistory();
  //signup the usere
  const handleSignupValues = (values) => {
    console.log(values);
    // add history router hook for after successfull signup user redirect to login and remove link from the Button tag
    history.push("/");
  };
  return (
    <div className="signup">
      <h1>Signup Form</h1>
      <RenderSignupForm onSubmit={handleSignupValues} />
    </div>
  );
};

export default Signup;
