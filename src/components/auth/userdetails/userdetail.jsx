import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './userdetails.css';
import { Link, useNavigate } from 'react-router-dom';
import SearchContext from '../../../context/context';
import withLogin from '../../hoc/withloggin/Withloggin';
import { toast } from 'react-toastify';

function Userdetail() {
  const [message, setMessage] = useState('');
  const [userdata, setUserdata] = useState({});
  const { setname, userid, setisloggedin } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userid) {
      setMessage("User not authorized, please login first.");
      return;
    }

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://technoengnearbackend.onrender.com/api/v1/users/${userid}`,
          { withCredentials: true }
        );

        if (response?.data?.status === 401 || !response?.data?.data) {
          setMessage("User not authorized, please login first.");
        } else {
          const data = response.data.data;
          setUserdata(data);
          setname(data.name);
        }

      } catch (error) {
        console.log(error);
        setMessage("Error fetching user. Please login first.");
      }
    };

    fetchUserDetails();
  }, [userid]);

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "https://technoengnearbackend.onrender.com/api/v1/user/logout",
        { withCredentials: true }
      );

      toast.success(response?.data?.message);
      setisloggedin(false);
      localStorage.removeItem("loggedinStatus");
      navigate("/login");

    } catch (error) {
      console.log(error);
      toast.error("Error in logout, please try again later.");
    }
  };

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
            <span className="value">{userdata.name}</span>
          </div>
          <div className="detail-row">
            <span className="label">Email:</span>
            <span className="value">{userdata.email}</span>
          </div>
          <div className="detail-row">
            <span className="label">Phone Number:</span>
            <span className="value">{userdata.phoneNumber}</span>
          </div>
          <div className="detail-row">
            <span className="label">Role:</span>
            <span className="value">{userdata.role}</span>
          </div>
          <button className="edit-btn" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default withLogin(Userdetail);
