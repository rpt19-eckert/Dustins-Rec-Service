import React from 'react';


const ListImage = (props) => (
  <span className="image">
  {console.log("props in list image:", props)}
    <img src={`https://picsum.photos/300/200?random=${Math.random()*100}`}></img>
  </span>
)
export default ListImage;