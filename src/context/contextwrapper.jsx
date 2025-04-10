import React, { useState } from 'react';
import SearchContext from './context';

export default function Contextwrapper({ children }) {
  const [input, setInput] = useState('');
  const [name,setname]=useState('');

  
  return (
    <SearchContext.Provider value={{ input, setInput,name,setname }}>
      {children}
    </SearchContext.Provider>
  );
}
