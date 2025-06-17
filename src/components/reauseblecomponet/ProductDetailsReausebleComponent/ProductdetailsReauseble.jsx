import React, { useContext, useState } from 'react';
import { VscCallOutgoing } from "react-icons/vsc";
import { MdAddCall, MdEmail } from 'react-icons/md';
import { AiOutlineHeart } from "react-icons/ai";
import './productdetails.css';
import { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaHeartCirclePlus, FaTowerBroadcast } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import SearchContext from '../../../context/context';
import AddtoLike from '../../customhooks/useaddtocart1/useAddtoCart';


// 🔧 Function to format keys like "ceilingAirFlow" to "Ceiling Air Flow"
function formatLabel(key) {
  return key
    .replace(/([a-z])([A-Z])/g, '$1 $2')   // Split camelCase
    .replace(/_/g, ' ')                    // Replace underscores
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize each word
}

export default function ProductdetailsReusable({ product, onclickhandler1 }) {
  const [bigimage,setbigimage]= useState(product.images[0]);
  const [buttoncolor,setbuttonColor]=useState(false);
  const {userid}=useContext(SearchContext);
  const [data,setdata]=useState(null);
   useEffect(() => {
    if (product.images && product.images.length > 0) {
      setbigimage(product.images[0]);
    }
  }, [product]); 
   const onclickhandler11 = async () => {
  try {
    setbuttonColor(true);
    toast.success(`Added to like: ${product._id} & User: ${userid}`);

    const response = await AddtoLike(product._id, setdata, data, userid);
    console.log("Like response in productdetailsreuseble:", response);
  } catch (error) {
    toast.error("Error adding to like");
    console.error(error);
  }
};


  return (
    <div className="product-details-container">
      {product.image?  <div className="product-image">
       <img src={product.image} alt={product.name} loading="lazy" />
      
      </div>:<div className='product-image1'>
          <div className='big-image'>
           <img src={bigimage} alt={product.name} loading="lazy" />
          </div>
          <div className='small-image'>
           {product.images.map((image)=>{
            return <div className='image-con'><img src={image} alt={product.name} loading="lazy" onClick={()=>setbigimage(image)} key={image} /></div>
           })}
          </div>

      </div>}

      <div className="details-container">
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="spec-row"><strong>Category:</strong> {product.category}</p>
          <p className="spec-row"><strong>Brand:</strong> {product.brand}</p>
          <p className="spec-row"><strong>Min. Order Qty:</strong> {product.minOrderQty}</p> 
        </div>

        {product.technicalSpecs && Object.keys(product.technicalSpecs).length > 0 && (
          <div className="technical-specs">
         
            <div className="spec-list">
              {Object.entries(product.technicalSpecs).map(([key, value]) => (
                <p className="spec-row" key={key}>
                  <span className="spec-label">{formatLabel(key)}</span>
                  <span className="spec-value">{value}</span>
                </p>
              ))}
            </div>
          </div>
        )}
        <p><strong>Features:</strong></p>
          <ul>
            {Array.isArray(product.features)
              ? product.features.map((feat, i) => <li key={i}>{feat}</li>)
              : <li>{product.features}</li>
            }
          </ul>
      </div>
      

      <div className="action-buttons">
        <button className="buy-now-btn" onClick={onclickhandler1}>
          Send Enquiry
        </button>
        <button className="buy-now-btn">
          <a href="tel:+918851148551">Call Now</a>
        </button>
        
         <button 
  style={{
    fontSize: "25px",
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
    width: "100%",
    height: "38px",
    cursor: "pointer",
    boxShadow: buttoncolor ? "0px 0px 4px 0px grey" : "0px 0px 3px 0px black",
    borderRadius: "10px",
    border:"none"
    
  }}  
  onClick={onclickhandler11}
>
  <FaHeartCirclePlus 
    style={{ 
      fontSize: "32px", 
      color: buttoncolor ? "red" : "black",
    }} 
  />
</button>

        
        
      </div>
    </div>
  );
}
