//import React from 'react';
//import ReactDOM from 'react-dom';
import Dot from './Dot.jsx';

class DotsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.previousIndex = this.previousIndex.bind(this);
    this.nextIndex = this.nextIndex.bind(this);
    this.sideScroll = this.sideScroll.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log('props updated');
    if (prevProps.index < this.props.index) {
      this.nextIndex();
    } else if (prevProps.index > this.props.index) {
      this.previousIndex();
    }
  }

  previousIndex () {
    console.log('previous index');
    // let currentIndex = this.state.currentIndex;
    // if (currentIndex > 0) {
    //   this.setState({ currentIndex: currentIndex - 1});
    // } else {
    //   this.setState({ currentIndex: 6});
    // }
    let container = document.getElementById('dotsContainer' + this.props.listingId);
    this.sideScroll(container, 'left', 1, 8, 1);
  }

  nextIndex () {
    console.log('next index');
    // let currentIndex = this.state.currentIndex;
    // if (currentIndex < 6) {
    //   this.setState({ currentIndex: currentIndex + 1});
    // } else {
    //   this.setState({ currentIndex: 0});
    // }
    let container = document.getElementById('dotsContainer' + this.props.listingId);
    this.sideScroll(container, 'right', 1, 8, 1);
  }

  sideScroll (element, direction, speed, distance, step) {
    console.log('scrolled');
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
        <span id={'dotsContainer' + this.props.listingId} className="dotsContainer">
          <span id={'dotsContent' + this.props.listingId} className="dotsContent">
            {
              this.props.imgUrls.map((image, index) => {
                return (
                  <span key={index} >
                    <Dot index={this.state.currentIndex}/>
                  </span>
                );
              })
            }
          </span>
        </span>
      </div>
    );
  }
}

export default DotsContainer;