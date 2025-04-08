import React, { useContext, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import './searchbar.css';
import SearchContext from '../../../context/context';
import { useNavigate } from 'react-router-dom';

export default function Searchbar() {
  const { setInput } = useContext(SearchContext);
  const [localinput, setlocalinput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "all", "men", "women", "kids", "toys", "jewelry",
    "electronics", "shoes", "Eyewear", "perfume", "bags", "laptop"
  ];

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setlocalinput(value);
    setInput(value);

    if (value.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = categories.filter(cat =>
      cat.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
    setShowSuggestions(true);
  };

  const onSuggestionClick = (value) => {
    setInput(value);
    setShowSuggestions(false);
    navigate('/search');
    setlocalinput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowSuggestions(false);
      navigate('/search');
      setlocalinput('');
    }
  };

  return (
    <div className="searchconatainer" style={{ position: 'relative' }}>
      <span><IoIosSearch style={{ fontSize: "17px", color: "black" }} /></span>
      <input
        type='text'
        placeholder='Search for product, brands and more'
        value={localinput}
        onChange={onChangeHandler}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-dropdown">
          {suggestions.map((suggestion, index) => (
            <li key={index} onMouseDown={() => onSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
