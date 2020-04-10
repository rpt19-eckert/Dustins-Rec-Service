import React from 'react';

const ImageSlide = ({ url }) => {
  let imgUrl = url.image_url;
  console.log('imageslide', url);
  return (
    <span className="image recommendations">
      <img src={imgUrl}></img>
    </span>

  );
};

export default ImageSlide;