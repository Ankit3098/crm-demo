import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../redux/usersSlice";
import RenderLoginForm from "../components/RenderLoginForm";
import { fakeAuth } from "../util/fakeAuth";
import { SubmissionError } from "redux-form";

const Login = (props) => {
  const history = useHistory();
  const users = useSelector(selectAllUsers);
  const emails = users.map((user) => user.email);

  const handleLoginValues = (values) => {
    // validation for login email
    if (!emails.includes(values.email)) {
      throw new SubmissionError({
        email: "Email does not exist",
        _error: "Login failed!",
      });
    } else {
      fakeAuth.signin(() => {
        history.push("/dashboard");
      });
    }
  };
  return (
    <div className="login">
      <h1>Login Form</h1>
      <RenderLoginForm onSubmit={handleLoginValues} />
      <div className="login__emails">
        <h4>Try login with these email ids</h4>
        <ul>
          {emails.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Login;
