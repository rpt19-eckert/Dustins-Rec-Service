//import React from 'react';
//import ReactDOM from 'react-dom';
import LeftArrowListing from './LeftArrowListing.jsx';
import RightArrowListing from './RightArrowListing.jsx';
import ImageSlide from './ImageSlide.jsx';
import Listing from './Listing.jsx';
import Carousel from './Carousel.jsx';

class ListingCarousel extends React.Component {
  constructor (props) {
    super(props);

    this.previousListing = this.previousListing.bind(this);
    this.nextListing = this.nextListing.bind(this);
    this.sideScroll = this.sideScroll.bind(this);
  }

  previousListing () {
    let container = document.getElementById('listingContainer');
    this.sideScroll(container, 'left', 10, 311, 10);
  }

  nextListing () {
    let container = document.getElementById('listingContainer');
    this.sideScroll(container, 'right', 10, 311, 10);
  }

  sideScroll (element, direction, speed, distance, step) {
    console.log('sideScroll', element, direction, speed, distance, step);
    let scrollAmount = 0;
    let slideTimer = setInterval(() => {
      if (direction === 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  render () {
    return (
      <div>
        <LeftArrowListing
          direction="left"
          clickFunction={ this.previousListing }
          type="listing"/>
        <span id="listingContainer" >
          <span id="listingContent">
            {
              this.props.details.map((detail, index) => {
                return (
                  <span className="singleListing" key={index} >
                    <Carousel listingId={ detail }/>
                    <Listing details={ detail }/>
                  </span>
                );
              })
            }
          </span>
        </span>
        <RightArrowListing
          direction="right"
          clickFunction={ this.nextListing }
          type="listing" />
      </div>
    );
  }
}

export default ListingCarousel;