import React from 'react';

const ListItem = (props) => (

  <span className="item">
    {console.log("props in list item:", props)}
    <div className="line1">{props.detail.listing_type}
      <span> · </span>
      {props.detail.num_beds}&nbsp;beds
      <span className="star">star
<span className="rating">&nbsp;{props.detail.avg_review.toString().slice(0,4)} ({props.detail.num_review})</span>
      </span>
    </div>
    <div className="line2">{props.detail.listing_title}</div>
    <div className="line3">
      <span>${props.detail.night_price.toString().slice(0,3)}
        <span> / night</span>
      </span>
    </div>
  </span>
)
export default ListItem;