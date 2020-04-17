import React from 'react';
import ReactDOM from 'react-dom';
import LeftArrowListing from './LeftArrowListing.jsx';
import RightArrowListing from './RightArrowListing.jsx';
import ImageSlide from './ImageSlide.jsx';
import Listing from './Listing.jsx';
import Carousel from './Carousel.jsx';
import Carousel2 from './Carousel2.jsx';
import Carousel3 from './Carousel3.jsx';
import Carousel4 from './Carousel4.jsx';
import Carousel5 from './Carousel5.jsx';
import Carousel6 from './Carousel6.jsx';


class ListingCarousel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentListingIndex: 0
    };
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
            <span className="singleListing 1" >
              <Carousel listingId={this.props.details[this.state.currentListingIndex]}/>
              <Listing details={this.props.details[this.state.currentListingIndex]}/>
            </span>
            <span className="singleListing 2" >
              <Carousel2 listingId={this.props.details[this.state.currentListingIndex + 1]}/>
              <Listing details={this.props.details[this.state.currentListingIndex + 1]}/>
            </span>
            <span className="singleListing 3" >
              <Carousel3 listingId={this.props.details[this.state.currentListingIndex + 2]}/>
              <Listing details={this.props.details[this.state.currentListingIndex + 2]}/>
            </span>
            <span className="singleListing 4" >
              <Carousel4 listingId={this.props.details[this.state.currentListingIndex + 3]}/>
              <Listing details={this.props.details[this.state.currentListingIndex + 3]}/>
            </span>
            <span className="singleListing 5" >
              <Carousel5 listingId={this.props.details[this.state.currentListingIndex + 4]}/>
              <Listing details={this.props.details[this.state.currentListingIndex + 4]}/>
            </span>
            <span className="singleListing 6" >
              <Carousel6 listingId={this.props.details[this.state.currentListingIndex + 5]}/>
              <Listing details={this.props.details[this.state.currentListingIndex + 5]}/>
            </span>
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