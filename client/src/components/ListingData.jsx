import React from 'react';
import $ from 'jquery';
import ListingCarousel from './ListingCarousel.jsx';
import sampleData from './sampleData.js';


class ListingData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: sampleData[1],
      images: sampleData[0]
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3003/listings',
      success: (data) => {
        this.setState({
          listings: data
        });
        console.log('listing data in ListingData', data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    $.ajax({
      url: 'http://localhost:3003/images',
      success: (data) => {
        this.setState({
          images: data
        });
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    return (
      <div className="listing recommendations">
        <ListingCarousel details={this.state.listings} images={this.state.images} />
      </div>
    );
  }
}
export default ListingData;