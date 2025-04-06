import React, { useState, useEffect } from 'react';
import Usefetchapi from '../../../customhooks/Usefetchapi';
import Reuseablecompont from '../../../reauseblecomponet/reuseablecompont';

export default function Bags() {
  const [product, setProduct] = useState([]);
  const { response } = Usefetchapi("https://mytrabackendclone-3.onrender.com/api/v1/products/category/bags");

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
