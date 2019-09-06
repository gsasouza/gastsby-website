import React from 'react';
import Header from '../header/Header';

const Layout = ({ children, ...props }) => {
  return (
    <div >
      <Header {...props}/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout;
