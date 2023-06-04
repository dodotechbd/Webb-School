import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Shared/Footer";
import FooterTwo from "./Pages/Shared/FooterTwo";
import Header from "./Pages/Shared/Header/Header";

const UserSite = ({ handleThemeChange, theme }) => {
  return (
    <>
      <Header handleThemeChange={handleThemeChange} theme={theme} />
      <div>
        <Outlet />
      </div>
      <FooterTwo></FooterTwo>
      <Footer></Footer>
    </>
  );
};

export default UserSite;
