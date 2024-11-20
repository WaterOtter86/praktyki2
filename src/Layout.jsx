import React from 'react';
import Banner from './Banner';
import Sidebar from './Sidebar';
import Kontent from './Kontent';
import Footer from './Footer';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Banner />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar position="Lewy" />
        <Kontent />
        <Sidebar position="Prawy" />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
