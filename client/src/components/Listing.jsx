import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx';
import ListItem from './ListItem.jsx';

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <span>
        <Carousel imgUrls={this.props.images}/>
        <ListItem detail={this.props.details}/>
      </span>);
  }
}

export default Listing;