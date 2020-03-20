import React from 'react';
import $ from 'jquery';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
   }

  componentDidMount() {
    $.ajax({
      url: '/listings',
      success: (data) => {
        this.setState({
          listings: data
        })
        console.log(data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
export default Details;