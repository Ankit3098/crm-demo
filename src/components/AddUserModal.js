import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const AddUserModal = (props) => {
  return (
    <>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader>Add User</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                value={props.inputUser.username}
                type="name"
                name="username"
                id="name"
                placeholder="Enter User Name"
                onChange={props.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">email</Label>
              <Input
                value={props.inputUser.email}
                type="email"
                name="email"
                id="email"
                placeholder="Enter User Email"
                onChange={props.handleChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.handleClick}>
            Add User
          </Button>
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AddUserModal;
