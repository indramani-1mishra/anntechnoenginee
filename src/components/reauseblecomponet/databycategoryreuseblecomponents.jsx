import React, { useState, useEffect } from 'react';
import Usefetchapi from '../customhooks/Usefetchapi';
import Reuseablecompont from './Reuseablecompont';

export default function Databycategory({category}) {
  const [product, setProduct] = useState([]);
 
  const { response } = Usefetchapi(` https://technoengnearbackend.onrender.com/api/v1/products/search/${category}`);
  //console.log(response.data+"hello");

  useEffect(() => {
    if (response && response.data && Array.isArray(response.data)) {
      setProduct(response.data);

    }
  }, [response]);

  return (
    <>
      <Reuseablecompont data={product} />
    </>
  );
}
