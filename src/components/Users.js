import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../redux/usersSlice";
import UserCard from "./UserCard";

const Users = () => {
  const users = useSelector(selectAllUsers);

  return (
    <div className="users">
      {users &&
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            to={`/users/${user.id}`}
            handleDelete
            btnName="Delete User"
            showUser="Show User"
          />
        ))}
    </div>
  );
};

export default Users;
