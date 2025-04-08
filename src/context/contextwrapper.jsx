import React, { useState } from 'react';
import SearchContext from './context';

export default function Contextwrapper({ children }) {
  const [input, setInput] = useState('');

  
  return (
    <SearchContext.Provider value={{ input, setInput }}>
      {children}
    </SearchContext.Provider>
  );
}
