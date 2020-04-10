import React from 'react';
import ReactDOM from 'react-dom';
import Arrow from './Arrow.jsx';
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
    const index = shouldResetIndex ? lastIndex : currentListingIndex - 1;

    this.setState({
      currentListingIndex: index
    });
  }

  nextListing () {
    console.log('next listing props', this.props);
    console.log('state', this.state.currentListingIndex);
    const lastIndex = this.props.details.length - 1;
    const { currentListingIndex } = this.state;
    const shouldResetIndex = currentListingIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentListingIndex + 1;

    this.setState({
      currentListingIndex: index
    });
  }

  render () {
    return (
      <span className="listingCarousel recommendations">
        <Arrow
          direction="left"
          clickFunction={ this.previousListing }
          glyph="&#9664;"
          type="listing"/>
        <span className="singleListing recommendations" >
          <Listing details={this.props.details[this.state.currentListingIndex]} images={this.props.images.slice(this.state.currentListingIndex * 5, this.state.currentListingIndex * 5 + 5) } currentIndex={this.state.currentListingIndex}/>
        </span>
        <span className="singleListing recommendations" >
          <Listing details={this.props.details[this.state.currentListingIndex + 1]} images={this.props.images.slice(this.state.currentListingIndex * 5 + 5, this.state.currentListingIndex * 5 + 10) } currentIndex={this.state.currentListingIndex + 1}/>
        </span>
        <span className="singleListing recommendations" >
          <Listing details={this.props.details[this.state.currentListingIndex + 2]} images={this.props.images.slice(this.state.currentListingIndex * 5 + 10, this.state.currentListingIndex * 5 + 15) } currentIndex={this.state.currentListingIndex + 2}/>
        </span>
        <Arrow
          direction="right"
          clickFunction={ this.nextListing }
          glyph="&#9654;"
          type="listing" />
      </span>
    );
  }
}

export default ListingCarousel;