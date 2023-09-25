import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className='w-[85vw] h-screen'>
      {children}
    </div>
  );
};

export default DefaultLayout;
