//import React from 'react';

const ListItem = (props) => (

  <div className="item">
    <div className="line1"><span className="greyFont">{props.detail.listing_type}
      <span> · </span>
      {props.detail.num_beds === 1 ? props.detail.num_beds + ' bed' : props.detail.num_beds + ' beds'}
    </span>
    <span className="review">
      <span className="icon">
        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false">
          <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"></path>
        </svg>
      </span>
      <span className="rating">&nbsp;{props.detail.avg_review.toString().slice(0, 4)} <span className="greyFont">({props.detail.num_review})</span></span>
    </span>
    </div>
    <div className="line2 regularFont">{props.detail.listing_title}</div>
    <div className="line3 regularFont">
      <span>
        <span className="price">${props.detail.night_price.toString().slice(0, 3)}</span>
        <span> / night</span>
      </span>
    </div>
  </div>
);
export default ListItem;