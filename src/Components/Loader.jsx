import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="border-4 rounded-full w-10 h-10  border-blue-500 border-t-transparent animate-spin transition-all"></div>
    </div>
  );
};

export default Loader;
