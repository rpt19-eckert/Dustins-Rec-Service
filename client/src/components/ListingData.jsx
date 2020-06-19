import React from 'react';
import $ from 'jquery';
import ListingSlider from './ListingSlider.jsx';
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
      // local
      url: 'http://localhost:3003/listings',
      //deployed
      // url: 'http://ec2-3-101-46-200.us-west-1.compute.amazonaws.com:3003/listings',
      success: (data) => {
        console.log('data', data);
        this.setState({
          listings: data

        }, () => {
          console.log('new state', this.state);
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }

  render() {
    return (
      <div className="listing">
        <ListingSlider details={this.state.listings} />
      </div>
    );
  }
}
export default ListingData;