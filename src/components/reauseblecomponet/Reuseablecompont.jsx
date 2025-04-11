import React from 'react'
import './reuseblecomponents.css'
import { useNavigate } from 'react-router-dom'
export default function Reuseablecompont({data}) {

    const navigate = useNavigate();
    const onclickhandler= (id)=>
    {
        navigate(`/productdetails/${id}`);
    }
  return (
 
     <div className='container'>
    {data.length > 0 ? (
        data.map((item) => (
            <div key={item._id} className='itemcontainer' onClick={()=>onclickhandler(item._id)}>
                <div className='details' >
                <p>
                        {item.description.length > 50 
                            ? item.description.slice(0, 50) + "..." 
                            : item.description}
                    </p>
                    <span>
                        {item.productname.length > 50 
                            ? item.productname.slice(0, 50) + "..." 
                            : item.productname}
                    </span>
                   
                    <p>Price: ₹{item.price}</p>
                  
                </div>
                <div className='photo' >
                    <img src={item.image} alt={item.productname} width="200" />
                </div>
            </div>
        ))
    ) : (
        <p>Loading products...</p>
    )}
</div>
  
  )
}
