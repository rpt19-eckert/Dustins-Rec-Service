import React from 'react';
import ListingCarousel from './ListingCarousel.jsx';

const ListingMap = (props) => (
  <span>
    <ListingCarousel details={props.details[0]} images={props.images[0 * 5, 0 * 5 + 5]} key={0} />
    <ListingCarousel details={props.details[1]} images={props.images[1 * 5, 1 * 5 + 5]} key={1} />
    <ListingCarousel details={props.details[2]} images={props.images[2 * 5, 2 * 5 + 5]} key={2} />
  </span>
);

export default ListingMap;

// let listingObj = {};
// for (let i in props.images) {
//   if (!Object.keys(listingObj).includes(props.images[i].listing_id.toString())) {
//     listingObj[props.images[i].listing_id] = [props.images[i].image_url];
//   } else {
//     listingObj[props.images[i].listing_id].push(props.images[i].image_url);
//   }
// }