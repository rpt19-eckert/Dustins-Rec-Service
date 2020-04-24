//import React from 'react';

const styleButton = {
  'padding': '0px',
  'margin': '0px'
};

const styleViewBox = {
  'height': '22px',
  'width': '22px',
  'fill': 'rgb(118, 118, 118)'
};

const RightArrowListing = ({ direction, clickFunction, type }) => (
  <div
    id="rightScroll"
    className={ `slide-arrow ${direction} ${type}` }
    onClick={ clickFunction }>
    <button type="button" className="_1rp5252" aria-busy="false" style={styleButton}><svg viewBox="0 0 18 18" role="img" aria-label="Next" focusable="false" style={styleViewBox}><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"></path></svg></button>
  </div>
);

export default RightArrowListing;
