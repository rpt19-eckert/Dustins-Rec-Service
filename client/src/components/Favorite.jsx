import React from 'react';

const styleViewBox = {
  'height': '16px',
  'width': '16px',
  'display': 'block',
  'overflow': 'visible'
};



const Favorite = ({ direction, clickFunction, glyph, type }) => (
  <div
    className='favorite'
    onClick={ clickFunction }>
    <button aria-label="Add listing to a list" type="button" className="_1li8g8e"><span className="_3hmsj"><div className="_1tsvpuw"><svg viewBox="0 0 24 24" fill="currentColor" fillOpacity="0" stroke="#222222" strokeWidth="1.4" focusable="false" aria-hidden="true" role="presentation" strokeLinecap="round" strokeLinejoin="round" style={styleViewBox}><path className='fav' d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round"></path></svg></div></span></button>
  </div>
);

export default Favorite;