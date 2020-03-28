import React from 'react';
import ListItem from './ListItem.jsx';

const ListOfItems = (props) => (
  <span>
    {props.details.slice(0, 3).map((detail, index)=> <ListItem detail={detail} key={index} />)}
  </span>
);
export default ListOfItems;