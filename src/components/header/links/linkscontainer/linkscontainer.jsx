import React, { useState } from "react";
import Reuseblelogic from "../reuseablelogic/reuseblelogic";
import { IoMdDownload } from "react-icons/io";
import "./linkcounter.css";
import {
  
  menuData,
  
} from "../reuseablelogic/helpercode";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function Linkscontainer() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const navigate = useNavigate();

  return (
    <div 
      className="ass" 
      onMouseLeave={() => setHoveredMenu(null)} // ✅ Parent par onMouseLeave
    >
      <ul className="uls">
        <li
          className="list"
          onMouseEnter={() => setHoveredMenu("men")}
        >
          product & service
          {hoveredMenu === "men" && <Reuseblelogic menuData={menuData} />}
        </li>

        <li
          className="list"
           onClick={()=>navigate('/')}
        >
          home
          
        </li>

       <li className="list-with-dropdown list">
       <span className="main-link">Introduction</span>
  
       <ul className="dropdown">
       <li onClick={() => navigate('/introduction')}>Show Introduction</li>
       <li><a href="borchure.pdf" download={true}> download borchure </a></li>
        </ul>
       </li>

        <li
          className="list"
          onClick={()=>navigate('/sellerinfo')}
        >
          contect us
       
        </li>

       
      </ul>
      <button className="btn22" onClick={()=>navigate('/')}><RxCross1 fontSize={"23px"}/></button>
    </div>
  );
}
