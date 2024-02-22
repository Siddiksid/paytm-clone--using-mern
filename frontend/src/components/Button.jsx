import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full my-3"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
