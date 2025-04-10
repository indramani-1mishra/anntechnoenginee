import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './userdetails.css';
import { Link } from 'react-router-dom';
import SearchContext from '../../../context/context';

export default function Userdetail() {
  const [message, setMessage] = useState('');
  const [userdata, setuserdata] = useState({});
   const {setname}= useContext(SearchContext);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("https://mytrabackendclone-3.onrender.com/api/v1/users", {
          withCredentials: true
        });

        if (!response) {
          setMessage("User not authorized, please login first.");
        } else {
          const data = response.data.data;
          setuserdata(data);
          setname(data.firstname+" "+data.lastname);
        }
      } catch (error) {
        console.log(error);
        setMessage("Error fetching user. Please login first.");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className='userdetails-container'>
      {message ? (
        <div className="error-message">
          <p>{message}</p>
          <Link to="/login" className="login-link">Click here to login</Link>
        </div>
      ) : (
        <div className='details-card'>
          <img
            src="https://scontent.flko9-2.fna.fbcdn.net/v/t39.30808-6/438256407_1169122724264056_5310981140638874357_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dbNYIFxHjxQQ7kNvwGvrh8j&_nc_oc=AdnkSVPcHKlr_DgsJslauiiSbPsLJGrXbwLM5JP2xY1cBh65ZXw0iTjsDBYJnyUktqIxihiuFy5dU4fMA4sydWop&_nc_zt=23&_nc_ht=scontent.flko9-2.fna&_nc_gid=7zSSwlL2yDuwRXJ8STcDmw&oh=00_AfHU0Ho6QNLI0jshGd3brk73TeYwFqL0OY2LdHNOi2yZVw&oe=67FD593F"
            alt="P"
            className="profile-pic"
          />
          <h2>My Profile</h2>
          <div className="detail-row">
            <span className="label">Name:</span>
            <span className="value">{userdata.firstname} {userdata.lastname}</span>
          </div>
          <div className="detail-row">
            <span className="label">Email:</span>
            <span className="value">{userdata.email}</span>
          </div>
          <div className="detail-row">
            <span className="label">Phone Number:</span>
            <span className="value">{userdata.phonenumber}</span>
          </div>
          <div className="detail-row">
            <span className="label">Role:</span>
            <span className="value">{userdata.role}</span>
          </div>
          <button className="edit-btn">Edit Profile</button>
        </div>
      )}
    </div>
  );
}
