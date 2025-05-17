import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductdetailsReauseble from '../../reauseblecomponet/ProductDetailsReausebleComponent/ProductdetailsReauseble';
import { useRelatedProducts } from '../../customhooks/usefetchproduct/useFetchProduct';
import Reuseablecompont from '../../reauseblecomponet/Reuseablecompont';

export default function Databyname() {
  const [productDetails, setProductdetails] = useState([]);
  const { name } = useParams();
  console.log(name + " name");
  
  

  const getproductdetails = async () => {
    try {
      const response = await axios.get(`https://technoengnearbackend.onrender.com/api/v1/products/search/${name}`);
      setProductdetails(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getproductdetails();
  }, [name]);
  const relatedProducts = useRelatedProducts(productDetails[0]);

  return (
    <>
      {productDetails.length > 0 ? (
        <ProductdetailsReauseble product={productDetails[0]} />

        
      ) : (
        <p>Loading or no product found...</p>
      )}
      <Reuseablecompont data={relatedProducts}/>
    </>
  );
}
