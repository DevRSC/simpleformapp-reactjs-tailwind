import React from "react";

const Card = (props) => {
  return (
    <div className='mt-5 w-[600px] rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8'>
      {props.children}
    </div>
  );
};

export default Card;
