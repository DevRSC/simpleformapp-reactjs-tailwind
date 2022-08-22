import React from "react";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <>
      <Card>
        <ul>
          {props.UserData.map((user) => (
            <li key={user.id}>
              <label className='mt-2 block rounded border-2 border-gray-400 p-2 text-gray-700 dark:text-white'>
                {user.name} ({user.age} years old)
              </label>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UserList;
