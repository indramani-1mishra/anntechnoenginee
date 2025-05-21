import React from 'react'
import './reuseblecomponents.css'
import { useNavigate } from 'react-router-dom'
import Loder from './loder/Loder';

export default function Reuseablecompont({ data }) {
  const navigate = useNavigate();
     
  const onclickhandler = (id) => {
    navigate(`/productdetails/${id}`);
  };
  console.log(data+"data");



  return (
    <div className='container' >
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item._id} className='itemcontainer' onClick={() => onclickhandler(item._id)}>
            <div className='photo'>
              <img src={item.image||item.images[0]} alt={item.name} width="200" loading='lazy' />
            </div>

            <div className='details'>
              
              

              <p>
                {item.name.length > 80
                  ? item.name.slice(0, 80) + "..."
                  : item.name}
              </p>

            
            </div>
          </div>
        ))
      ) : (
        <Loder />
      )}
    </div>
  );
}
