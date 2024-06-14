import React from "react";
import ContentHeader from "./ContentHeader";
import "../styles/content.css";
import Card from "../components/Card";

import NewEvents from "./NewEvents";
const Dashboard = () => {
  return (
    <div className="content">
      <ContentHeader />
      <Card />
      <NewEvents />
    </div>
  );
};

export default Dashboard;
