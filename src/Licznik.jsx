import React, { useState } from 'react';

const Licznik = ({ id }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{
          color: 'black', 
          padding: '10px 20px', 
          margin: '5px', 
          backgroundColor: '#f0f0f0', 
          border: '1px solid #ccc',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Licznik {id}: {count}
      </button>
    </div>
  );
};

export default Licznik;
