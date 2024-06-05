import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content';
import Profile from './components/Profile';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  
  return (
    
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    
  );
};

export default App
