import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className=' bg-blue-900 w-[80vw] h-full border-2 border-red-900'>
      {children}
    </div>
  );
};

export default DefaultLayout;
