import React from 'react'



import '../styles/dashboard.css';
import Sidebar from './Sidebar';
import Content from './Content';
import Profile from './Profile';


const Dashboard = () => {
  
  return (
    <div className='dashboard'>
      <Sidebar/>
      <div className="dashboard--content">
        <Content/>
        <Profile/>
      </div>
      
     </div>
  );
};

export default Dashboard
