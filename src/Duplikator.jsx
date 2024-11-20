import React from 'react';
import Licznik from './Licznik';

const Duplikator = () => {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {Array.from({ length: 20 }, (_, index) => (
        <Licznik key={index} id={index + 1} />
      ))}
    </div>
  );
};

export default Duplikator;
