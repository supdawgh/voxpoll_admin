import React, { useContext } from "react";

import { IoIosLogOut } from "react-icons/io";
import { AuthContext } from "../context/AuthContext";

const ProfileHeader = () => {
  const { setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    if (window.confirm("Do you wanna logout?")) setAuth({});
  };

  return (
    <div className="profile--header">
      <h2 className="header--title">Admin</h2>
      <div className="edit">
        <IoIosLogOut onClick={handleLogout} className="icon" />
      </div>
    </div>
  );
};

export default ProfileHeader;
