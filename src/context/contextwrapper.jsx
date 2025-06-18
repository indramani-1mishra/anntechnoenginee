import React, { useEffect, useState } from 'react';
import SearchContext from './context';

export default function Contextwrapper({ children }) {
  const [input, setInput] = useState('');
 const [showemail,setshowemail]=useState(false);
 const[showenquiry,setshowenquiry]=useState(false);
 const [userid,setuserid]=useState('');
 const [likedProducts, setLikedProducts] = useState({});

  

 const [isloggedin, setisloggedin] = useState(() => {
  try {
    const value = localStorage.getItem("loggedinStatus");
    return value ? JSON.parse(value) : false;
  } catch (error) {
    console.error("Error parsing loggedinStatus from localStorage:", error);
    return false;
  }
});

  const [count, setcount] = useState(() => {
    if(isloggedin)
    {
      const stored = localStorage.getItem("storedcount");
   const parsed = Number(stored);
   return !isNaN(parsed) ? parsed : 0;
    }
    else{
      return 0;
    }
  });
  const [name, setname] = useState(()=>
    {
      if(isloggedin){
        const storedname= localStorage.getItem('storedname');
       return storedname?storedname:"";
      }
      else
      {
        return "";
      }
    });

  useEffect(() => {
    localStorage.setItem("storedcount", count);
    localStorage.setItem("storedname",name);
  }, [count,name]);

  return (
    <SearchContext.Provider value={{
      input, setInput,
      name, setname,
      count, setcount,
      isloggedin, setisloggedin,
      showemail,setshowemail,
      setshowenquiry,showenquiry,
      userid,setuserid,
      likedProducts, setLikedProducts
      
    }}>
      {children}
    </SearchContext.Provider>
  );
}
