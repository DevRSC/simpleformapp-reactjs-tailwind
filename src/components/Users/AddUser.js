import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorAlertModal from "../UI/ErrorAlertModal";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [toggle, setToggled] = useState(true);
  const [error, setError] = useState();

  const nameEventHandler = (event) => {
    setName(event.target.value);
  };
  const ageEventHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please input a valid name and age",
      });
      toggleHandler();
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please input a valid age (>0)",
      });
      toggleHandler();
      return;
    }

    const userData = {
      name: name,
      age: age,
    };
    props.onAddUser(userData);

    setName("");
    setAge("");
  };

  const toggleHandler = () => {
    setToggled(!toggle);
  };

  return (
    <>
      <div>
        {!toggle ? (
          <ErrorAlertModal
            title={error.title}
            message={error.message}
            showModal={toggleHandler}
          />
        ) : null}
        <Card>
          <form className='space-y-2' onSubmit={submitHandler}>
            <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              User Form
            </h1>
            <div>
              <label className='block text-gray-700 dark:text-white'>
                Full Name
              </label>
              <input
                type='text'
                onChange={nameEventHandler}
                value={name}
                placeholder='John Doe'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
              />
            </div>
            <div>
              <label className='block text-gray-700 dark:text-white'>Age</label>
              <input
                type='number'
                onChange={ageEventHandler}
                value={age}
                placeholder='Age'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
              />
            </div>
            <button
              type='submit'
              className='mt-3 w-full border-spacing-2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Add User
            </button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default AddUser;
