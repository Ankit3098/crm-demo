import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Col, FormGroup, Input, Label } from "reactstrap";
import { Field, reduxForm, Form } from "redux-form";
import { validate } from "../util/validations";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <FormGroup className="mr-sm-2 m-2" row>
    <Label htmlFor="eamil" sm={{ size: 1, offset: 1 }}>
      {label}
    </Label>
    <Col sm={6}>
      <Input {...input} placeholder={label} type={type} />
      {touched && error && <span style={{ color: "red" }}>{error}</span>}
    </Col>
  </FormGroup>
);

const RenderSignupForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
        <Field
          name="confirmPass"
          type="password"
          component={renderField}
          label="Confirm Password"
        />
        <FormGroup className="mt-3 ml-2">
          <ButtonGroup className="ml-5">
            <Col sm={{ size: 1, offset: 11 }}>
              <Button
                className="ml-3"
                color="primary"
                disabled={pristine || submitting}
              >
                Signup
              </Button>
            </Col>
            <Col sm={{ offset: 5 }}>
              <Button
                type="button"
                color="secondary"
                onClick={reset}
                disabled={pristine || submitting}
              >
                Reset
              </Button>
            </Col>
          </ButtonGroup>
        </FormGroup>
      </Form>
      <Col sm={{ offset: 2 }}>
        <p>
          Already have an account? Login <Link to="/login">here!</Link>
        </p>
      </Col>
    </>
  );
};

export default reduxForm({
  form: "signupForm",
  validate,
  asyncChangeFields: ["email"],
})(RenderSignupForm);
