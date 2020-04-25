//import React from 'react';
//import ReactDOM from 'react-dom';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';
import ImageSlide from './ImageSlide.jsx';
import Favorite from './Favorite.jsx';
import sampleData from './sampleData.js';
import DotsContainer from './DotsContainer.jsx';
//import $ from 'jquery';



class Carousel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      imgUrls: sampleData[2]
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listingId !== this.props.listingId) {
      const id = this.props.listingId.listing_id;
      //console.log('listingid', this.props.listingId.listing_id);
      $.ajax({
        url: 'http://ec2-54-183-138-229.us-west-1.compute.amazonaws.com:3002/listing-info',
        data: {listingId: id},
        success: (data) => {
          //console.log('from jason', data);
          let thisListingImages = {};
          const imageValues = Object.values(data[0]);
          thisListingImages[imageValues[1]] = [];
          for (let i = 5; i < 48; i += 3) {
            if (imageValues[i] !== null) {
              thisListingImages[imageValues[1]].push(imageValues[i]);
            }
          }
          //console.log(thisListingImages);
          this.setState({
            imgUrls: thisListingImages[id]
          });
        },
        error: (err) => {
          console.log('err', err);
        }
      });
    }
  }

  previousSlide () {
    // console.log('previous slide props', this.props);
    // console.log('state current image index', this.state.currentImageIndex);
    const lastIndex = this.state.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? 0 : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    // console.log('next slide props', this.props);
    // console.log('state current image index', this.state.currentImageIndex);
    const lastIndex = this.state.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? lastIndex : currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  }

  addToFavorite () {
    console.log('added to favorite');
    $('#id').css({'fill': '#FF385C'});
  }

  render () {
    return (
      <span className="carousel">
        <Favorite clickFunction={ this.addToFavorite }/>
        <LeftArrow
          direction="left"
          clickFunction={ this.previousSlide }
          type="image" />

        <ImageSlide url={ this.state.imgUrls[this.state.currentImageIndex]}/>

        <RightArrow
          direction="right"
          clickFunction={ this.nextSlide }
          type="image" />

        <DotsContainer listingId={this.props.listingId.listing_id} index={this.state.currentImageIndex} imgUrls={this.state.imgUrls} />

      </span>
    );
  }
}

export default Carousel;