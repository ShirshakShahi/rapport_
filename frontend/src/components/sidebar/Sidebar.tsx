import React from "react";
import Nav from "./Nav";

export interface authProps {
  isAuthenticated: boolean;
}

const Sidebar: React.FC<authProps> = ({ isAuthenticated }) => {
  const authNav = [
    {
      label: "/home",
      key: "home",
      path: "/home",
    },
    {
      label: "/posts",
      key: "post",
      path: "/posts",
    },
    {
      label: "/about",
      key: "about",
      path: "/about-us",
    },
  ];

  const unAuthNav = [
    {
      label: "/home",
      key: "home",
      path: "/home",
    },
    {
      label: "/login",
      key: "login",
      path: "/login",
    },
    {
      label: "/signup",
      key: "signup",
      path: "/signup",
    },
  ];

  return (
    <div className="flex flex-column flex-1 fixed left-0 justify-start items-center  h-screen">
      {isAuthenticated ? (
        <Nav navItems={authNav} />
      ) : (
        <Nav navItems={unAuthNav} />
      )}{" "}
    </div>
  );
};

export default Sidebar;
