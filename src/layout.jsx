import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className='w-[85vw] h-screen bg-red-900'>
      {children}
    </div>
  );
};

export default DefaultLayout;
