import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className=' bg-slate-800 w-[85vw] h-full'>
      {children}
    </div>
  );
};

export default DefaultLayout;
