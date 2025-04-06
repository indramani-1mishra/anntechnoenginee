import React from 'react'
import './reuseblecomponents.css'
export default function Reuseablecompont({data}) {

    console.log(data+"in");
  return (
 
     <div className='container'>
    {data.length > 0 ? (
        data.map((item) => (
            <div key={item._id} className='itemcontainer'>
                <div className='details'>
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
                <div className='photo'>
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
