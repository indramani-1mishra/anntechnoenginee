import { useEffect, useState } from 'react';
import Usefetchapi from '../customhooks/Usefetchapi';
import Reuseablecompont from './Reuseablecompont';


export default function Databydescription({ category }) {
  const [data, setData] = useState([]);
  const { response } = Usefetchapi(
    `https://technoengnearbackend.onrender.com/api/v1/products/search/${category}`
  );

  useEffect(() => {
    if (response && response.data && Array.isArray(response.data)) {
      setData(response.data);
    }
  }, [response]);

  return (
    <>
      <Reuseablecompont data={data} />
    </>
  );
}
