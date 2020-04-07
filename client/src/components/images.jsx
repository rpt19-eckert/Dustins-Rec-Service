import React from 'react';
import $ from 'jquery';
import ListOfImages from './ListOfImages.jsx';
import Carousel from './Carousel.jsx';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
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
      <div className="images">
        <ListOfImages images={this.state.images}/>
      </div>
    );
  }
}
export default Images;