import React from "react";

const Cancel_Button = (...props: any) => {
  return (
    <button
      type="button"
      className={`text-[#132039] bg-[#D9E1F2] hover:bg-[#D9E1F2] focus:ring-4 focus:ring-[#D9E1F2] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none ${props}`}
    >
      cancel
    </button>
  );
};

export default Cancel_Button;
