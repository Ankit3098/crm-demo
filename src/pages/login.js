import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

const Login = () => {
  // set login user state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // handle for input change
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // for submit submit user
  const handleClick = () => {
    console.log(user);
    // add history router hook for after successfull login user redirect to dashboard and remove link from the Button tag
  };
  return (
    <div className="login">
      <h1>Login Form</h1>
      <Form>
        <FormGroup className="mr-sm-2 m-2" row>
          <Label htmlFor="eamil" sm={{ size: 1, offset: 1 }}>
            Email
          </Label>
          <Col sm={6}>
            <Input
              type="email"
              name="email"
              id="eamil"
              placeholder="Enter your Email"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup className="mr-sm-2 m-2" row>
          <Label htmlFor="password" sm={{ size: 1, offset: 1 }}>
            Password
          </Label>
          <Col sm={6}>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup className="mt-3 ml-2">
          <Col sm={{ size: 1, offset: 2 }}>
            <Link to="/dashboard">
              <Button type="sumbit" color="primary" onClick={handleClick}>
                Login
              </Button>
            </Link>
          </Col>
        </FormGroup>
      </Form>
      <Col sm={{ offset: 2 }}>
        <p>
          Don't have an account? Signup <Link to="/signup">here!</Link>
        </p>
      </Col>
    </div>
  );
};

export default Login;
