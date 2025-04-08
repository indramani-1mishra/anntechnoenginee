import React, { useEffect, useState, useContext } from 'react';
import SearchContext from '../../../context/context';
import Databycategory from '../../reauseblecomponet/databycategoryreuseblecomponents';
import Databydescription from '../../reauseblecomponet/databydescription';

export default function Databysearch() {
  const [data, setData] = useState('');
  const { input } = useContext(SearchContext);

  const categories = [
    "all", "men", "women", "kids", "toys", "jewelry",
    "electronics", "shoes", "Eyewear", "perfume", "bags"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(input);
    }, 800);

    return () => clearTimeout(timer);
  }, [input]);

  // Smart matching: exact OR partial
  const inputLower = data.trim().toLowerCase();

  const isCategory = categories.some(cat => {
    const catLower = cat.toLowerCase();
    return inputLower === catLower || inputLower.includes(catLower);
  });

  console.log("Input:", input);
  console.log("Trimmed:", inputLower);
  console.log("Matched Category?", isCategory);

  return (
    <>
      {data ? (
        isCategory ? (
          <Databycategory category={data} />
        ) : (
          <Databydescription description={data} />
        )
      ) : null}
    </>
  );
}
