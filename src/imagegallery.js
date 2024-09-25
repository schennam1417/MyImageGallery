import React from 'react';
import './image-gallery.css';  

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(require.context('./assets/images', false, /\.(png|jpg|svg)$/));

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Local Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
