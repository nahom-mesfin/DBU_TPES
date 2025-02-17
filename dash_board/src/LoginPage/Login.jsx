// Login.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
// import email_icon from '../Assets/email.png';
// import password_icon from '../Assets/password.png';
import API_URL from "../config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      console.log('helo');
      if (response.status === 200) {
        const userFound = response.data;
        localStorage.setItem("token", userFound.token);

        console.log("response", response.data)
        console.log("response", response.data.user.role)
        if (userFound.user.role === "admin") {
          navigate('/');
        } else if (userFound.user.role === "student") {
          alert("Only admins can access this page");
          window.location.reload(); // Refresh the page and clear the form
        }
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Email and password should not be null")
      } else if (err.response && err.response.status === 404) {
        setError("This email is not registered.")
      } else if (err.response && err.response.status === 403) {
        setError("Email or password incorrect")
      } else if (err.response && err.response.status === 500) {
        setError("Internal server error");
      } else {
        setError("Something went wrong");
      }
    }
  }
  
  return (
    <div id="login-page">
      <form onSubmit={handleSubmit}>
        <div id='container1Input'>
          <div id='headerA'>
            <div id='text'>LoginForm</div>
            <div id='underline'></div>
          </div>
          {error && (
            <div className="error">
              {error}
            </div>
          )}
          <div id='inputsA'>
            <div id='inputAa'>
              {/* <img src={email_icon} alt="logo" id="imgb" /> */}
              <input
                type="email"
                placeholder='Email...'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off" 
              />
            </div>
            <div id='inputAa'>
              {/* <img src={password_icon} alt="" id="imgb"/> */}
              <input
                type="password"
                placeholder='Password...'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
          <div id='forgot-password'>Not have an Account? <a href="/RegistrationForm">Register</a></div>
          <div id='submit-container'>
            <div id='submit'>
              <button type="submit" className="reg-button">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}




