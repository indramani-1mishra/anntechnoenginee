import React, { useContext,  } from 'react';
import {  useParams } from 'react-router-dom';
import Usefetchapi from '../../customhooks/Usefetchapi';
import Reuseablecompont from '../../reauseblecomponet/Reuseablecompont';
import SearchContext from '../../../context/context';
import ProductdetailsReauseble from '../../reauseblecomponet/ProductDetailsReausebleComponent/ProductdetailsReauseble';
import Loder from '../../reauseblecomponet/loder/Loder';
import {UseAddTocart} from '../../customhooks/useAddtoCart/UseAddTocart';
import {useRelatedProducts} from '../../customhooks/usefetchproduct/useFetchProduct';

export default function Productdetails() {
  const { id } = useParams();
   const {count,setcount,isloggedin}= useContext(SearchContext);
  
  // Fetch individual product
  const { response: productResponse } = Usefetchapi(`https://mytrabackendclone-3.onrender.com/api/v1/products/${id}`);
  const product = productResponse?.data;
  const addToCart = UseAddTocart(isloggedin, count, setcount, id);  
  const relatedProducts = useRelatedProducts(product);

  // Show loading until product data is available
  if (!productResponse || !product) {
    return  <Loder/>
  }

  return (
    <>
       <ProductdetailsReauseble product={product} onclickhandler={addToCart}/>

      <h3 className="related-title">Related Products</h3>
      <Reuseablecompont data={relatedProducts} />
    </>
  );
}
