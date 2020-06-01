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
    location.href = 'http://localhost:3000/' + this.props.details.listing_id;
  }

  render () {
    console.log('details', this.props.details);
    return (
      <span onClick={this.handleClick}>
        <ListItem detail={this.props.details}/>
      </span>);
  }
}

export default Listing;