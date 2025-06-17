import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

  export function UseAddTocart( isloggedin,count,setcount,id) {
    const navigate = useNavigate();
   const Added = async () => { 
       try {  
        
         if (isloggedin) {
           const response = await axios.post(
             `http://localhost:3001/api/v1/like/${id}`,
             {},
             { withCredentials: true }
           );
           alert('product added');
           setcount(count + 1);
         } else {
           alert("please login to add to cart");
           navigate('/login');
           
         }
       } catch (error) {
         console.error("Error in add to cart:", error.response?.data || error.message);
       }
     }
     return Added;
}
