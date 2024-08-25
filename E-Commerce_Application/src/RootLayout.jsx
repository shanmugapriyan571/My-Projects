import React from "react";
import { Outlet } from "react-router-dom";
import Navbarpanel from "./Navbarpanel";
import { Provider } from "react-redux";
import store from "./Store";
function RootLayout() {
  return (
    <div>
      <Navbarpanel />
      <Outlet />
    </div>
  );
}

export default RootLayout;
