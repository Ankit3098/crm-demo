import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/usersSlice";
import RenderUserModalForm from "./RenderUserModalForm";

const AddUserModal = ({ modal, toggle }) => {
  const dispatch = useDispatch();

  const handleAddUserValue = (values) => {
    console.log(values);
    dispatch(
      addUser({
        id: Math.ceil(Math.random() * 1000),
        ...values,
      })
    );
    toggle();
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Add User</ModalHeader>
        <ModalBody>
          <RenderUserModalForm toggle={toggle} onSubmit={handleAddUserValue} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddUserModal;
