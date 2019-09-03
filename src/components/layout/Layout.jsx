import React from 'react';
import Header from '../header/Header';

const Layout = ({ children }) => {
  return (
    <div >
      <Header/>
      <div onScroll={e => console.log(e)}>
        {children}
      </div>
    </div>
  )
}

export default Layout;
