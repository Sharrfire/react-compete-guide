import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UserList from './Users/UserList';
UserSection.propTypes = {};

function UserSection(props) {
  const [userList, setUserList] = useState([]);
  const handleAddUser = (userName, userAge) => {
    setUserList((prev) => {
      return [...prev, { id: Math.random().toString(), name: userName, age: userAge }];
    });
  };
  return (
    <>
      <AddUser onAddUser={handleAddUser} />
      {/* <AddUser /> */}
      <UserList users={userList} />
    </>
  );
}

export default UserSection;
