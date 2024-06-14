import React, { useContext } from "react";
import ProfileHeader from "./ProfileHeader";
import "../styles/profile.css";
import userImage from "../assets/image.png";
import { AuthContext } from "../context/AuthContext";
const Profile = () => {
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--detail">
        <img
          src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${auth.user.name}`}
          alt=""
        ></img>
        <h3 className="username">{auth.user.name}</h3>
        <span className="description">{auth.user.email}</span>
      </div>
    </div>
  );
};

export default Profile;
