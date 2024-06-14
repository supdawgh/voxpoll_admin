import React from "react";
import ContentHeader from "./ContentHeader";
import "../styles/content.css";
import Card from "../components/Card";
import CandidateList from "./CandidateList";
const Dashboard = () => {
  return (
    <div className="content">
      <ContentHeader />
      <Card />
      <CandidateList />
    </div>
  );
};

export default Dashboard;
