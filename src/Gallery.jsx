import React from 'react';

const Gallery = () => {
  const images = [
    'https://fakeimg.pl/600x400?text=PLACEHOLDER+:D&font=bebas&font_size=90',
    'https://fakeimg.pl/600x400?text=PLACEHOLDER+:D&font=bebas&font_size=90',
    'https://fakeimg.pl/600x400?text=PLACEHOLDER+:D&font=bebas&font_size=90',
    'https://fakeimg.pl/600x400?text=PLACEHOLDER+:D&font=bebas&font_size=90',
  ];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {images.map((url, index) => (
        <img key={index} src={url} alt={`Gallery ${index + 1}`} width="150" height="150" />
      ))}
    </div>
  );
};

export default Gallery;