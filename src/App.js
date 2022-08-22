import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const DUMMYUSERS = [
  { id: 1, name: "John Doe", age: 32 },
  { id: 2, name: "Jane Doe", age: 31 },
  { id: 3, name: "Jack Doe", age: 33 },
];

const App = () => {
  const [users, setUsers] = useState(DUMMYUSERS);

  const addUserHandler = (user) => {
    user.id = Math.random();
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div className='flex h-screen bg-slate-600'>
      <div className='m-auto'>
        <AddUser onAddUser={addUserHandler} />
        <UserList UserData={users} />
      </div>
    </div>
  );
};

export default App;
