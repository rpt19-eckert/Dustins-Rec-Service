import React from 'react';
import ReactDOM from 'react-dom';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';
import ImageSlide from './ImageSlide.jsx';
import Favorite from './Favorite.jsx';



class Carousel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  previousSlide () {
    console.log('previous slide props', this.props);
    console.log('state current image index', this.state.currentImageIndex);
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? 0 : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    console.log('next slide props', this.props);
    console.log('state current image index', this.state.currentImageIndex);
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? lastIndex : currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  }

  addToFavorite () {
    console.log('added to favorite');
  }

  render () {
    return (
      <span className="carousel">
        <Favorite clickFunction={ this.addToFavorite }/>
        <LeftArrow
          direction="left"
          clickFunction={ this.previousSlide }
          type="image" />

        <ImageSlide url={ this.props.imgUrls[this.state.currentImageIndex] } />

        <RightArrow
          direction="right"
          clickFunction={ this.nextSlide }
          type="image" />
      </span>
    );
  }
}

export default Carousel;