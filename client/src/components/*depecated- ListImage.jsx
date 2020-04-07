import React from 'react';


const ListImage = (props) => (
  <span className="image">
    {console.log('props in list image:', props)}
    <img src={props.image.image_url}></img>
  </span>
);
export default ListImage;