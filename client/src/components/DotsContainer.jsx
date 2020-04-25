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
    // console.log('props updated');
    if (prevProps.index < this.props.index && this.props.index > 2) {
      this.nextIndex();
    } else if (prevProps.index > this.props.index && this.props.index < this.props.imgUrls.length - 3) {
      this.previousIndex();
    }
  }

  previousIndex () {
    // console.log('previous index');
    let container = document.getElementById('dotsContainer' + this.props.listingId);
    this.sideScroll(container, 'left', 20, 11, 1);
  }

  nextIndex () {
    // console.log('next index');
    let container = document.getElementById('dotsContainer' + this.props.listingId);
    this.sideScroll(container, 'right', 20, 11, 1);
  }

  sideScroll (element, direction, speed, distance, step) {
    //console.log('current index: ', this.props.index);
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
                if (this.props.index === index) {
                  return (
                    <span key={index} className='dot active'>
                      <Dot index={this.state.currentIndex}/>
                    </span>
                  );
                } else if (Math.abs(this.props.index - index) === 1) {
                  return (
                    <span key={index} className='dot nearActiveOne'>
                      <Dot index={this.state.currentIndex}/>
                    </span>
                  );
                } else if (Math.abs(this.props.index - index) === 2) {
                  return (
                    <span key={index} className='dot nearActiveTwo'>
                      <Dot index={this.state.currentIndex}/>
                    </span>
                  );
                } else if (Math.abs(this.props.index - index) === 3) {
                  return (
                    <span key={index} className='dot nearActiveThree'>
                      <Dot index={this.state.currentIndex}/>
                    </span>
                  );
                } else if (Math.abs(this.props.index - index) === 4) {
                  return (
                    <span key={index} className='dot nearActiveFour'>
                      <Dot index={this.state.currentIndex}/>
                    </span>
                  );
                } else {
                  return (
                    <span key={index} className='dot'>
                      <Dot index={this.state.currentIndex}/>
                    </span>
                  );
                }

              })
            }
          </span>
        </span>
      </div>
    );
  }
}

export default DotsContainer;