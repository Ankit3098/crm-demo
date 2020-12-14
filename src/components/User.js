import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserCard from "./UserCard";

const User = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    // https://jsonplaceholder.typicode.com/users/1
    const fetchData = () => {
      let user = [];
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((json) => {
          user.push(json);
          setUsers(user);
        });
    };
    fetchData();
  }, [id]);

  // get one user data
  const userInfo = users.filter((user) => user.id === parseInt(id));
  return (
    <div className="user">
      {userInfo[0] && <UserCard user={userInfo[0]} to="/dashboard" />}
    </div>
  );
};

export default User;
