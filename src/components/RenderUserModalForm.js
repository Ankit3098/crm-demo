import React from "react";
import { Button, FormGroup, Input, Label, ModalFooter } from "reactstrap";
import { Field, reduxForm, Form } from "redux-form";

const renderField = ({ input, label, type }) => (
  <FormGroup className="mr-sm-2 m-2" row>
    <Label htmlFor="eamil">{label}</Label>

    <Input {...input} placeholder={label} type={type} />
  </FormGroup>
);

const RenderUserModalForm = (props) => {
  const { handleSubmit, toggle } = props;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Field name="name" type="text" component={renderField} label="Name" />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
        <ModalFooter>
          <Button color="primary" type="submit">
            Add User
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </>
  );
};

export default reduxForm({ form: "addUserForm" })(RenderUserModalForm);
