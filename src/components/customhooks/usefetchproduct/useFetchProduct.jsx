import { useEffect, useState } from 'react';

export function useRelatedProducts(product) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelated = async () => {
      if (product && product.category) {
        try {
          const res = await fetch(`https://technoengnearbackend.onrender.com/api/v1/products/search/${product.category}`);
          const json = await res.json();
          if (json?.data && Array.isArray(json.data)) {
            const filtered = json.data.filter(item => item._id !== product._id);
            setRelatedProducts(filtered);
          }
        } catch (err) {
          console.error("Error fetching related products:", err);
        }
      }
    };

    fetchRelated();
  }, [product]);

  return relatedProducts;
}

