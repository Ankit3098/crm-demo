import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import data from "../data/mockData.json";
import UserCard from "./UserCard";

const User = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setUsers(data);
  }, []);
  // get one user data
  const userInfo = users.filter((user) => user.id === parseInt(id));
  return (
    <div className="user">
      {userInfo[0] && <UserCard user={userInfo[0]} to="/dashboard" />}
    </div>
  );
};

export default User;
