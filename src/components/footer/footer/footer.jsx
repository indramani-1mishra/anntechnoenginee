import {  Link } from "react-router-dom";
import './footer.css';

import { FaCcVisa } from "react-icons/fa"; 
import { FaCcDiscover } from "react-icons/fa";
import { address, contactInfo, data, footerActions, footerLinks, infoLinks, socialLinks } from "./helpecode";


export default function Footer() {

  return (
    <div className="rajss">
      <div className="upperfooter">
         <div className="leftcontainer">
           <div className="first"> 
                <h3>About Us</h3>
             <ul>
              {footerLinks.map((item,index)=>{return(
                <li key={index}><Link to="/">{item}</Link></li>
              )})}
             </ul>
           </div>
           <div className="first">
           <h3>About Us</h3>
           <ul>
        {data.map((item, index) => {
         return (
          <li key={index}>
         <Link to="/">{item}</Link>
         </li>
          );
          })}
         </ul>
           </div>
           <div className="first">
           <h3>About Us</h3>
             <ul>
             {infoLinks.map((item,index)=>{
              return(
                <li key={index}> <Link to="/">{item}</Link></li>
              )
             })}
             </ul> 
 
           </div>
           <div className="first">
           <h3>About Us</h3>
             <ul>
             {infoLinks.map((item,index)=>{
              return(
                <li key={index}> <Link to="/">{item}</Link></li>
              )
             })}
             </ul>

           </div>
         </div>
         <div className="rightcontainer">
           <div className="rightfirstContainer">
           <div  className="first">
          <h3>mail us</h3>
          <ul>
             {contactInfo.map((item,index)=>{
              return(
                <li key={index}>{item}</li>
              );
             })}
          </ul>
          </div>
          <div className="rsecond">
            <h3>Social</h3>
            <ul >
            {socialLinks.map((item,index)=>{
            return(
              <li key={index}>
              <Link to={item.path}>{item.icon}</Link>
              </li>
            );
            })} 
            </ul>
          </div>
           </div>
           <div  className="first">
            <h3>Registered Office Address:</h3>
             <ul>
              {address.map((item,index)=>{
                return(
                  <li key={index}>{item}</li>
                )
              })}
             </ul>
            
           </div>
         </div>
      </div>
      <div className="lowerfooter">
        <ul>
            {footerActions.map((item,index)=>{
              return(
                <li key={index}>
                <Link to={item.path}><span> {item.icon} {item.text}</span></Link>
                </li>
              );
            })}
            <li>
                 <span>© 2007-2025 Flipkart.com</span>
            </li>
            <li >
               <span><FaCcVisa className="visa" /></span> 
                <span><FaCcDiscover /></span>
            </li>
        </ul>
        </div>
  
    </div>
  )
}
