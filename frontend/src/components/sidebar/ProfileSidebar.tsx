import React from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";

interface authProps {
  isAuthenticated?: boolean;
}

const ProfileSidebar: React.FC<authProps> = ({ isAuthenticated }) => {
  const { profileId } = useParams();
  console.log("prfooooooasdfasdfasdfasd", profileId);
  const navItems = [
    {
      label: "/profile",
      key: "profile",
      path: `/profile/${profileId}`,
    },
  ];

  const logout = "/logout";
  return (
    <div className="flex fixed right-0 justify-start items-center h-screen w-[200px]">
      {isAuthenticated ? <Nav navItems={navItems} logout={logout} /> : <Nav />}
    </div>
  );
};

export default ProfileSidebar;
