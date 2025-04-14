import React, { useState } from "react";
import Reuseblelogic from "../reuseablelogic/reuseblelogic";
import "./linkcounter.css";
import {
  beautyMenuData,
  homeLivingMenuData,
  kidsMenuData,
  menuData,
  menuDatawomen,
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
          men
          {hoveredMenu === "men" && <Reuseblelogic menuData={menuData} />}
        </li>

        <li
          className="list"
          onMouseEnter={() => setHoveredMenu("women")}
        >
          women
          {hoveredMenu === "women" && <Reuseblelogic menuData={menuDatawomen} />}
        </li>

        <li
          className="list"
          onMouseEnter={() => setHoveredMenu("kids")}
        >
          kids
          {hoveredMenu === "kids" && <Reuseblelogic menuData={kidsMenuData} />}
        </li>

        <li
          className="list"
          onMouseEnter={() => setHoveredMenu("home")}
        >
          home & living
          {hoveredMenu === "home" && <Reuseblelogic menuData={homeLivingMenuData} />}
        </li>

        <li
          className="list"
          onMouseEnter={() => setHoveredMenu("beauty")}
        >
          Beauty
          {hoveredMenu === "beauty" && <Reuseblelogic menuData={beautyMenuData} />}
        </li>
      </ul>
      <button className="btn22" onClick={()=>navigate('/')}><RxCross1 fontSize={"23px"}/></button>
    </div>
  );
}
