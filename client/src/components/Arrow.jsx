import React from 'react';

const Arrow = ({ direction, clickFunction, glyph, type }) => (
  <div
    className={ `slide-arrow ${direction} ${type}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
);

export default Arrow;