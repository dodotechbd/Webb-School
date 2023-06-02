import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";

const UserSite = ({ handleThemeChange, theme }) => {
  return (
    <>
      <Header handleThemeChange={handleThemeChange} theme={theme} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default UserSite;
