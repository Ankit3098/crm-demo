import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { addUser } from "../redux/usersSlice";

const AddUserModal = (props) => {
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputUser({ ...inputUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    dispatch(
      addUser({
        id: Math.ceil(Math.random() * 1000),
        ...inputUser,
      })
    );
    props.toggle();
    setInputUser({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader>Add User</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                value={inputUser.name}
                type="name"
                name="name"
                id="name"
                placeholder="Enter User Name"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">email</Label>
              <Input
                value={inputUser.email}
                type="email"
                name="email"
                id="email"
                placeholder="Enter User Email"
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddUser}>
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
