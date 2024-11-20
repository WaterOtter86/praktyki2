import React from 'react';
import Gallery from './Gallery';
import Duplikator from './Duplikator';
import Cechyx from './cechyx';

const Kontent = () => {
    return (
        <main style={{
          flex: 1,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h2>Gallery</h2>
          <Gallery />
          <h2>Liczniki</h2>
          <Duplikator />
          <h2>Cechy</h2>
          <Cechyx />
        </main>
      );
    };

export default Kontent;
