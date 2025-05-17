import React from 'react'
import { teamMembers } from '../helpercodeforintroduction/outteam'
import Formoreinfo from '../formoreinfo/Formoreinfo'
import { FaStar } from "react-icons/fa";
import './Ourteam.css'  // Import CSS here

export default function Ourteam() {
  return (
    <div className="our-team-container">
      <h1>Our Team</h1>
      <div>
        <p>
          We have appointed a talented group of professionals. Our experts work hard to know the requirements of patrons. Together with this, our team members are in constant dialogue with the clients that help them cater to their exact needs.
        </p>
        <ul>
          <p><strong>Some of the professionals working with us are as follows:</strong></p>
          {teamMembers.map((item, index) => (
            <li key={index}><FaStar />{item}</li>
          ))}
        </ul>
        <Formoreinfo />
      </div>
    </div>
  )
}
