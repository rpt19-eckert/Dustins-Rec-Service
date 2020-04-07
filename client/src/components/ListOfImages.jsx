import React from 'react';
//import ListImage from './ListImage.jsx';
import Carousel from './Carousel.jsx';


const ListOfImages = (props) => {
  console.log(props.images);
  return (
    <span>
      {props.images.slice(0, 3).map((image, index)=>
        <Carousel key={index} imgUrls={props.images.slice(index * 5, index * 5 + 5)}/> )
      }
    </span>
  );

};
export default ListOfImages;


//<ListImage image={image} key={index}/>