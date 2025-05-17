import React from 'react';
import './MainLayout.css';
 // ✅ Make sure bgimage.jpg is in same folder

const MainLayout = ({ children }) => {
 const styles = {
  backgroundLogo: {
    position: 'fixed',
    top: '300px',         // ✅ Use string with %
    left: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    //backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    opacity: 0.1,
    pointerEvents: 'none',
  }
};


  return (
    <div className="main-layout">
      <div style={styles.backgroundLogo}></div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
