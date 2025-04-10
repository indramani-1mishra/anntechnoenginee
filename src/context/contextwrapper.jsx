import React, { useState } from 'react';
import SearchContext from './context';

export default function Contextwrapper({ children }) {
  const [input, setInput] = useState('');
  const [name,setname]=useState('');
  const [count,setcount]=useState(0);

  
  return (
    <SearchContext.Provider value={{ input, setInput,name,setname,count,setcount }}>
      {children}
    </SearchContext.Provider>
  );
}
