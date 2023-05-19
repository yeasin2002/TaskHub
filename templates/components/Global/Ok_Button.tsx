import React from "react";

const Ok_Button = (...props: any) => {
  return (
    <button
      type="button"
      className={
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none " +
        props
      }
    >
      Ok
    </button>
  );
};

export default Ok_Button;
