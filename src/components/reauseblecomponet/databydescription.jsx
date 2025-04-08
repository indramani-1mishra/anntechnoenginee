import { useEffect, useState } from 'react';
import Usefetchapi from '../customhooks/Usefetchapi';
import Reuseablecompont from './reuseablecompont';

export default function Databydescription({ description }) {
  const [data, setData] = useState([]);
  const { response } = Usefetchapi(
    `https://mytrabackendclone-3.onrender.com/api/v1/products/description/${description}`
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
