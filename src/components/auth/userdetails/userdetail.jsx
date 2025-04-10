import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './userdetails.css'
import { Link } from 'react-router-dom';
export default function Userdetail() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("https://mytrabackendclone-3.onrender.com/api/v1/users", {
          withCredentials: true // agar cookies/token ka issue ho raha hai to ye zaroori hai
        });

        if (!response) {
          setMessage("User not authorized, please login first.");
        } else {
          console.log("User data:", response.data);
        }
      } catch (error) {
        console.log(error);
        setMessage("Error fetching user. Please login first.");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className='userdetailsconatainer'>
      <div className='inercontainer'><p> message:{message}</p>
     <span>  <Link to="/login">click to login</Link></span>
      </div>
    </div>
  );
}
