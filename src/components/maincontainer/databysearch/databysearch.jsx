import React, { useEffect, useState, useContext } from 'react';
import SearchContext from '../../../context/context';
import Databycategory from '../../reauseblecomponet/databycategoryreuseblecomponents';
import Databydescription from '../../reauseblecomponet/databydescription';
import { categories } from './helpercodeforsearch';

export default function Databysearch() {
  const [data, setData] = useState('');
  const { input } = useContext(SearchContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(input);
    }, 800);

    return () => clearTimeout(timer);
  }, [input]);

  const inputLower = data.trim().toLowerCase();

  const isCategory = categories.some(cat => {
    const catLower = cat.toLowerCase();
    return inputLower === catLower || inputLower.includes(catLower);
  });

  return (
    <>
      {data ? (
        isCategory ? (
          <Databycategory category={data} />
        ) : (
          <Databydescription category={data}/>
        )
      ) : null}
    </>
  );
}
