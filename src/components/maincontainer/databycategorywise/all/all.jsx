import React, { useState, useEffect } from 'react';
import Usefetchapi from '../../../customhooks/Usefetchapi';
import Reuseablecompont from '../../../reauseblecomponet/Reuseablecompont';


export default function All() {
  const [product, setProduct] = useState([]);
  const { response } = Usefetchapi("https://technoengnearbackend.onrender.com/api/v1/products/");

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
