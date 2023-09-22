import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className='w-[85vw] h-[85vh]'>
      {children}
    </div>
  );
};

export default DefaultLayout;
