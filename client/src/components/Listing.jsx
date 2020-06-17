import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx';
import ListItem from './ListItem.jsx';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    console.log('handleClick');
    e.preventDefault();
    // local
    location.href = 'http://localhost:3000/' + this.props.details.listing_id;
    // deployed
    // location.href = 'http://ec2-54-219-244-52.us-west-1.compute.amazonaws.com/images' + this.props.details.listing_id;
  }

  render () {
    return (
      <span onClick={this.handleClick}>
        <ListItem detail={this.props.details}/>
      </span>);
  }
}

export default Listing;