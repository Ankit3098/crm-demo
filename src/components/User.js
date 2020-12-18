import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "../redux/usersSlice";
import UserCard from "./UserCard";

const User = ({ match }) => {
  const { id } = match.params;

  // get one user data

  const userInfo = useSelector((state) => selectUserById(state, parseInt(id)));

  return (
    <div className="user">
      {userInfo && <UserCard user={userInfo} to="/dashboard" />}
    </div>
  );
};

export default User;
