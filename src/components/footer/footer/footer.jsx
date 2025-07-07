import {  Link } from "react-router-dom";
import './footer.css';

import { FaCcVisa } from "react-icons/fa"; 
import { FaCcDiscover } from "react-icons/fa";
import { address, contactInfo, data, footerActions, footerLinks, infoLinks, infoLinks1, socialLinks } from "./helpecode";


export default function Footer() {

  return (
    <div className="rajss">
      <div className="upperfooter">
         <div className="leftcontainer">
           <div className="first"> 
                <h3>company</h3>
             <ul>
              {footerLinks.map((item)=>{return(
                <li key={item}><Link to={item.path}>{item.name}</Link></li>
              )})}
             </ul>
           </div>
          
           
           <div className="first">
           <h3>Products And Services</h3>
             <ul>
             {infoLinks.map((item,index)=>{
              return(
                <li key={index}> <Link to={item.path}>{item.name}</Link></li>
              )
             })}
             </ul>

           </div>
            <div className="first">
           <h3>Products And Services</h3>
             <ul>
             {infoLinks1.map((item,index)=>{
              return(
                <li key={index}> <Link to={item.path}>{item.name}</Link></li>
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

                          <li style={{ textAlign: 'justify', padding: '5px', backgroundColor: 'rgb(11, 11, 37)',  }}>
  <p style={{ margin: 0, fontSize: '14px' }}>Made with ❤️ by Indramani Mishra</p>
  <p style={{ margin: 0, fontSize: '14px' }}>
    Contact: <a href="mailto:rajmishrasky@email.com" style={{ color: 'white', textDecoration: 'underline' }}>
      rajmishrasky@email.com
    </a>
  </p>
</li>
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
                 <span><Link to="https://www.anntechnoengineer.com/">https://www.anntechnoengineer.com/</Link></span>
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
