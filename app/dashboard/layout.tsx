import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>dashboard - from dashboard layout</p>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
