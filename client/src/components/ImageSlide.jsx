import React from 'react';


class ImageSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="image">
        <img src={this.props.url}></img>
      </span>

    );
  }
}

export default ImageSlide;