import { useEffect } from 'react';
import axios from 'axios';

export  function useFetchCartItem({ url, setCartItems, setcount, setLoading }) {
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get(url, { withCredentials: true });

        const items = res.data?.data?.items || [];
        setCartItems(items);
        setcount(items.length);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [url, setCartItems, setcount, setLoading]);
}
