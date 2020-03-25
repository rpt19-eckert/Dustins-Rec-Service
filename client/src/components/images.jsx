import React from 'react';
import $ from 'jquery';


class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
   }

  componentDidMount() {
    $.ajax({
      url: '/images',
      success: (data) => {
        this.setState({
          images: data
        })
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    return (
      <div>
        <a aria-label="Blue Boy Club House / Music Venue" href=""></a>
      </div>
    );
  }
}
export default Images;