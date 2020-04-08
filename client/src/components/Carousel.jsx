import React from 'react';
import ReactDOM from 'react-dom';
import Arrow from './Arrow.jsx';
import ImageSlide from './ImageSlide.jsx';



class Carousel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide () {
    console.log('previous slide props', this.props);
    console.log('state', this.state.currentImageIndex);
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    console.log('next slide props', this.props);
    console.log('state', this.state.currentImageIndex);
    const lastIndex = this.props.imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render () {
    return (
      <span className="carousel">
        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;"
          type="image" />

        <ImageSlide url={ this.props.imgUrls[this.state.currentImageIndex] } />

        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;"
          type="image" />
      </span>
    );
  }
}

export default Carousel;