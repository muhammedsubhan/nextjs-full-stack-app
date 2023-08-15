import React from "react";

const Layout = ({children}) => {
  return (
    <>
      <div>
        <h1 className="text-6xl font-semibold">Our Works</h1>
        {children}
      </div>
    </>
  );
};

export default Layout;
