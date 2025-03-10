import React from "react";
import { Outlet } from "react-router";
import { NavigationMenuDemo } from "../demo/NavigationMenuDemo";
import ButtonLanguage from "../button/ButtonLanguage";
import AnotherComponent from "../AnotherComponent";
// import Process from "../process/Process";

const Navbar = () => {
  return (
    <div>
      <header className="flex justify-center gap-5 mt-5">
        {/* <Process /> */}
        <NavigationMenuDemo />
        <ButtonLanguage />
      </header>
      {/* will either be home.tsx or settings.tsx */}
      <Outlet />
    </div>
  );
};

export default Navbar;
