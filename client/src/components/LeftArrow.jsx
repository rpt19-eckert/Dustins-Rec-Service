import React from 'react';

const style = {
  'height': '10px',
  'width': '10px',
  'display': 'block',
  'fill': 'currentcolor'
};

const LeftArrow = ({ direction, clickFunction, type }) => (
  <div
    className={ `slide-arrow ${direction} ${type}` }
    onClick={ clickFunction }>
    <button aria-label="previous image" type="button" className="_1li8g8e"><span className="_3hmsj"><svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={style} ><path d="m10.8 16c-.4 0-.7-.1-.9-.4l-6.8-6.7c-.5-.5-.5-1.3 0-1.8l6.8-6.7c.5-.5 1.2-.5 1.7 0s .5 1.2 0 1.7l-5.8 5.9 5.8 5.9c.5.5.5 1.2 0 1.7-.2.3-.5.4-.8.4"></path></svg></span></button>
  </div>
);

export default LeftArrow;