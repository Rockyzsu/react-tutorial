import React from "react";
import Headers from "../components/Headers";
import Navigator from "../components/Navigation";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Headers />
      <div className="wrapper">
        <Navigator />
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
}

export default Layout;
