import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  // update the state
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  //signup the usere
  const handleClick = () => {
    console.log(user);
    // add history router hook for after successfull signup user redirect to login and remove link from the Button tag
  };
  return (
    <div className="signup">
      <h1>Signup Form</h1>
      <Form>
        <FormGroup className=" mr-sm-2 m-2" row>
          <Label for="username" sm={{ size: 1, offset: 1 }}>
            Name
          </Label>
          <Col sm={6}>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup className=" mr-sm-2 m-2" row>
          <Label htmlFor="email" sm={{ size: 1, offset: 1 }}>
            Email
          </Label>
          <Col sm={6}>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup className=" mr-sm-2 m-2" row>
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
        <FormGroup className=" mr-sm-2 m-2" row>
          <Label htmlFor="confirmPass" sm={{ size: 1, offset: 1 }}>
            Confirm Password
          </Label>
          <Col sm={6}>
            <Input
              type="password"
              name="confirmPass"
              id="confirmPass"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup className="mt-3 ml-2">
          <Col sm={{ size: 1, offset: 2 }}>
            <Link to="/login">
              <Button color="primary" onClick={handleClick}>
                Signup
              </Button>
            </Link>
          </Col>
        </FormGroup>
      </Form>
      <Col sm={{ offset: 2 }}>
        <p>
          Already have an account? Login <Link to="/login">here!</Link>
        </p>
      </Col>
    </div>
  );
};

export default Signup;
