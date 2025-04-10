import React, { useState } from 'react';
import axios from 'axios';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
   

    console.log("✅ Login button clicked"); // Test log

    if (!email && !phonenumber) {
      setMessage("Please enter either email or phone number.");
      return;
    }

    try {
      const res = await axios.post(
        'https://mytrabackendclone-3.onrender.com/api/v1/login',
        { email, phonenumber, password },
        { withCredentials: true } // ✅ important for cookie to work
      );

      console.log("✅ Login Response:", res);

      setMessage('Login successful! Redirecting...');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      console.error("❌ Login failed:", err);
      setMessage(
        err.response?.data?.message || 'Invalid credentials. Please try again.'
      );
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>

      <div className="login-field">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <div className="login-field">
        <label>Phone Number</label>
        <input
          type="text"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          placeholder="Enter phone number"
        />
      </div>

      <div className="login-field">
        <label>Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? 'password' : 'text'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          <button type="button" className="toggle-btn" onClick={togglePassword}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
      </div>

      <div className="login-submit">
        <button type="submit">Login</button>
      </div>

      {message && <p className="login-message">{message}</p>}
    </form>
  );
}
