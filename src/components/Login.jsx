import React from 'react';
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
    const navigate=useNavigate();

    const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/Content');
  };
  return (
    <div className='login'>
        <form className='login-container'>
            <div className='login-title'>
              <h2>Admin Login</h2>
            </div>
           <div className='login-input'>
            <input type='email' placeholder='Your email' required></input>
            <input type='password' placeholder='Enter Password'required></input>
            <div className='login-condition'>
                <input type="checkbox" required></input>
          <p>By contnuing, i agree that the information provided is accurate</p></div>
          <button type='button' className='login-button' onClick={handleLogin}>Login</button>
           </div>
        </form>
    </div>
  )
}

export default Login;
