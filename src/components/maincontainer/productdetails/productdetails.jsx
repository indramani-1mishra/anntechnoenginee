import React, { useContext,  } from 'react';
import {  useParams } from 'react-router-dom';
import Usefetchapi from '../../customhooks/Usefetchapi';
import Reuseablecompont from '../../reauseblecomponet/Reuseablecompont';
import SearchContext from '../../../context/context';
import ProductdetailsReauseble from '../../reauseblecomponet/ProductDetailsReausebleComponent/ProductdetailsReauseble';
import Loder from '../../reauseblecomponet/loder/Loder';
import {UseAddTocart} from '../../customhooks/useAddtoCart/UseAddTocart';
import {useRelatedProducts} from '../../customhooks/usefetchproduct/useFetchProduct';
import ProductInquiryCard from '../../reauseblecomponet/productenquirycard/Productenquirycard';
import { sendEmail } from '../../customhooks/SendEmail/Sendemail';

export default function Productdetails() {
  const { id } = useParams();
   const {setshowenquiry,showenquiry}= useContext(SearchContext);
  
  // Fetch individual product
  const { response: productResponse } = Usefetchapi(`https://technoengnearbackend.onrender.com/api/v1/products/${id}`);
  const product = productResponse?.data;
 // const addToCart = UseAddTocart(isloggedin, count, setcount, id);  
  const relatedProducts = useRelatedProducts(product);
    //const {image,name,price,modelType}=product;
  
   


  // Show loading until product data is available
  if (!productResponse || !product) {
    return  <Loder/>
  }
  const onclicks =()=>
  {
    console.log("hello"+showenquiry);
    setshowenquiry(true);
    console.log(showenquiry);
    console.log(product.images[0]);
    
    

  }
           
      

  const onsubmithandler =(e)=>{
     e.preventDefault();
      console.log("hello");
      const {name1,useremail,number}=e.target;
      //console.log(name1.value,useremail.value,number.value);

      sendEmail(
 product.name,
 useremail.value,
  name1.value,
  number.value,
 
  product.modelType,
  product.image

  );
      setshowenquiry(false);
      
  }

  return (
    <>
       <ProductdetailsReauseble product={product}  onclickhandler1={onclicks} />
      
      <h3 className="related-title">Related Products</h3>
      
      <Reuseablecompont data={relatedProducts} />
      {showenquiry && <ProductInquiryCard  image={product.images[0]} name={product.name} model={product.brand}  onSubmit={(e)=>onsubmithandler(e)}/> }
    </>
  );
}
