import React, { useEffect, useState } from 'react';
import Imagelogo from '../imagelogo/imagelogo';
import Linkscontainer from '../links/linkscontainer/linkscontainer';
import './header.css';
import Searchbar from '../serchbar/searchbar';
import Logocontainer from '../logocontainer/Logocontainer';
import Headeformobile from '../headerformobilescreen/Headeformobile';

export default function Completeheader() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <Headeformobile />
      ) : (
        <div className='allheaderconatainer'>
          <Imagelogo />
          <Linkscontainer />
          <Searchbar />
          <Logocontainer />
        </div>
      )}
    </>
  );
}
