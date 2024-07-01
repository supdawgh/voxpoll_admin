import React from "react";
import logo from "../assets/logo2.png";
import "../styles/sidebar.css";
import {
  BiBookAlt,
  BiHelpCircle,
  BiHome,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
} from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";

const Sidebar = () => {
  let { pathname } = useLocation();

  let tab = pathname.split("/").at(-1);

  return (
    <div className="menu">
      <div className="logo">
        <img src={logo} className="logo-icon" alt="" />
      </div>
      <div className="menu--list">
        <Link
          to="/dashboard"
          className={`item ${tab === "dashboard" ? "active" : ""}`}
        >
          <BiHome className="icon" />
          Dashboard
        </Link>
        <Link
          to="/unverified"
          className={`item ${tab === "unverified" ? "active" : ""}`}
        >
          <BiTask className="icon" />
          Unverified
        </Link>
        <Link
          to="/allevents"
          className={`item ${tab === "allevents" ? "active" : ""}`}
        >
          <BiSolidReport className="icon" />
          All Events
        </Link>
        <Link
          to="/newadmin"
          className={`item ${tab === "newadmin" ? "active" : ""}`}
        >
          <GrUserAdmin className="icon" />
          New Admin
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
