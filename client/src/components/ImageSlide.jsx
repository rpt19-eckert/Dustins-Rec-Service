import React from 'react';

const ImageSlide = ({ url }) => {
  let imgUrl = url.image_url;

  return (
    <span className="image">
      <img src={imgUrl}></img>
    </span>

  );
};

export default ImageSlide;