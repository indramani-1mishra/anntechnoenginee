import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { FaRegEye, FaRegEyeSlash, FaTowerBroadcast } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Signup() {
  const [name, setfirstname] = useState('');

  const [phoneNumber, setphonenumber] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [message, setmessage] = useState('');
  const [passwordtype, setpasswordtype] = useState(true);
  const navigate = useNavigate();

  const handleonsubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(' https://technoengnearbackend.onrender.com/api/v1/users/', {
        name,
        email,
        phoneNumber,
        password,
      });
       
      console.log(response.data);
      toast.success("User created successfully!");
      setmessage("User created successfully!");

      // Reset form fields
      setemail('');
      setfirstname('');
     
      setpassword('');
      setphonenumber('');

      // Redirect only on success
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.log(error);
      setmessage("Error creating user. Please try again.");
    }
  };

  const onclickhandler = () => {
    setpasswordtype(!passwordtype);
  };

  return (
    <form onSubmit={handleonsubmit} className='form1'>
      <div className='inputfield'>
        <label>Enter  name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setfirstname(e.target.value)}
          required
        />

       

        <label>Enter email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />

        <label>Enter phone number</label>
        <input
          type='number'
          value={phoneNumber}
          onChange={(e) => setphonenumber(e.target.value)}
          required
        />

        <label className='password-label'>Enter password</label>
        <div className='password-wrapper'>
          <input
            type={passwordtype ? 'password' : 'text'}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={onclickhandler}
            className='btn1'
            aria-label="Toggle password visibility"
          >
            {passwordtype ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
      </div>

      <div className='submitb'>
        <button type='submit'>Sign Up</button>
      </div>

      {message && <p className='pk'>{message}</p>}
    </form>
  );
}
