import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import AddUserModal from "../components/AddUserModal";
import Users from "../components/Users";
import data from "../data/mockData.json";
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [inputUser, setInputUser] = useState({
    id: Math.ceil(Math.random() * 1000),
    username: "",
    email: "",
  });
  // get the data from local json file
  useEffect(() => {
    setUsers(data);
  }, []);
  // update the state
  const handleChange = (e) => {
    setInputUser({ ...inputUser, [e.target.name]: e.target.value });
  };
  // delete user
  const handleDelete = (id) => {
    setUsers((oldUsers) => {
      return oldUsers.filter((user) => user.id !== id);
    });
  };
  // add user
  const handleAddUser = () => {
    setUsers(users.concat(inputUser));
    setModal(false);
  };
  // open and close modal
  const toggle = () => setModal(!modal);
  return (
    <div className="dashboard">
      <div className="add__user">
        <Button color="primary" className="m-3" onClick={toggle}>
          Add User
        </Button>
        <AddUserModal
          inputUser={inputUser}
          handleClick={handleAddUser}
          handleChange={handleChange}
          modal={modal}
          toggle={toggle}
        />
      </div>
      <div className="display__user">
        {users &&
          users.map((user) => (
            <Users key={user.id} handleDelete={handleDelete} user={user} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
