import React from "react";

const Card = (props) => {
  return (
    <div className='mx-auto mt-6 block max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800 md:max-w-2xl'>
      {props.children}
    </div>
  );
};

export default Card;
