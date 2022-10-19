import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddUser from './Users/AddUser';
import './css/UserSection.css';
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
    <div>
      <AddUser onAddUser={handleAddUser} />
      {/* <AddUser /> */}
      <UserList users={userList} />
    </div>
  );
}

export default UserSection;
