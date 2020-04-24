//import React from 'react';
//import ReactDOM from 'react-dom';
import LeftArrowListing from './LeftArrowListing.jsx';
import RightArrowListing from './RightArrowListing.jsx';
import ImageSlide from './ImageSlide.jsx';
import Listing from './Listing.jsx';
import Carousel from './Carousel.jsx';

class ListingSlider extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.previousListing = this.previousListing.bind(this);
    this.nextListing = this.nextListing.bind(this);
    this.sideScroll = this.sideScroll.bind(this);
  }

  previousListing () {
    let currentIndex = this.state.currentIndex;
    if (currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1});
    }
    let container = document.getElementById('listingContainer');
    this.sideScroll(container, 'left', 10, 311, 10);
  }

  nextListing () {
    let currentIndex = this.state.currentIndex;
    if (currentIndex < 6) {
      this.setState({ currentIndex: currentIndex + 1});
    }
    let container = document.getElementById('listingContainer');
    this.sideScroll(container, 'right', 10, 311, 10);
  }

  sideScroll (element, direction, speed, distance, step) {
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
        { this.state.currentIndex !== 0 ?
          <LeftArrowListing
            direction="left"
            clickFunction={ this.previousListing }
            type="listing"/> :
          null
        }
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
        { this.state.currentIndex !== 3 ?
          <RightArrowListing
            direction="right"
            clickFunction={ this.nextListing }
            type="listing" /> :
          null
        }

      </div>
    );
  }
}

export default ListingSlider;