import React from 'react';
import ReactDOM from 'react-dom';
import LeftArrowListing from './LeftArrowListing.jsx';
import RightArrowListing from './RightArrowListing.jsx';
import ImageSlide from './ImageSlide.jsx';
import Listing from './Listing.jsx';


class ListingCarousel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentListingIndex: 0
    };
    this.previousListing = this.previousListing.bind(this);
    this.nextListing = this.nextListing.bind(this);
  }

  previousListing () {
    console.log('previous listing props', this.props);
    console.log('state', this.state.currentListingIndex);
    const lastIndex = this.props.details.length - 1;
    const { currentListingIndex } = this.state;
    const shouldResetIndex = currentListingIndex === 0;
    const index = shouldResetIndex ? 0 : currentListingIndex - 1;

    this.setState({
      currentListingIndex: index
    });
  }

  nextListing () {
    console.log('next listing props', this.props);
    console.log('state urrentListingIndex', this.state.currentListingIndex);
    const lastIndex = this.props.details.length - 1;
    const { currentListingIndex } = this.state;
    const shouldResetIndex = currentListingIndex === lastIndex - 2;
    const index = shouldResetIndex ? lastIndex - 2 : currentListingIndex + 1;

    this.setState({
      currentListingIndex: index
    });
  }

  render () {
    return (
      <span className="listingCarousel">
        <LeftArrowListing
          direction="left"
          clickFunction={ this.previousListing }
          type="listing"/>
        <span className="singleListing" >
          <Listing details={this.props.details[this.state.currentListingIndex]} currentIndex={this.state.currentListingIndex}/>
        </span>
        <span className="singleListing" >
          <Listing details={this.props.details[this.state.currentListingIndex + 1]} currentIndex={this.state.currentListingIndex + 1}/>
        </span>
        <span className="singleListing" >
          <Listing details={this.props.details[this.state.currentListingIndex + 2]} currentIndex={this.state.currentListingIndex + 2} />
        </span>
        <RightArrowListing
          direction="right"
          clickFunction={ this.nextListing }
          type="listing" />
      </span>
    );
  }
}

export default ListingCarousel;