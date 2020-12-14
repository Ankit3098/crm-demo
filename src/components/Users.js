import React from "react";
import UserCard from "./UserCard";

const Users = ({ user, handleDelete }) => {
  return (
    <div className="users">
      <UserCard
        user={user}
        to={`/users/${user.id}`}
        handleDelete={handleDelete}
        btnName="Delete User"
        showUser="Show User"
      />
    </div>
  );
};

export default Users;
