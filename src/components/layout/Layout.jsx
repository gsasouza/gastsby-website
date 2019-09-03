import React from 'react';
import Header from '../header/Header';

const Layout = ({ children }) => {
  return (
    <div >
      <Header/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout;
