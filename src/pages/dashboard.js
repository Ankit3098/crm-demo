import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import AddUserModal from "../components/AddUserModal";
import Users from "../components/Users";
import { fakeAuth } from "../util/fakeAuth";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    fakeAuth.signout(() => {
      history.push("/login");
    });
  };

  const toggle = () => setModal(!modal);
  return (
    <div className="dashboard">
      <div className="add__user">
        <Button color="primary" className="m-3" onClick={toggle}>
          Add User
        </Button>
        <Button color="danger" className="mt-3 mb-3" onClick={handleClick}>
          Logout
        </Button>
        <AddUserModal modal={modal} toggle={toggle} />
      </div>
      <div className="display__user">
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
