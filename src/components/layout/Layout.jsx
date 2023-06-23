import React from "react";
import Sidebar from "../organisms/Sidebar/Sidebar";

function Layout(props) {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="basis-1/6">
        <Sidebar />
      </div>
      <div className="basis-5/6">{props.children}</div>
    </div>
  );
}

export default Layout;
