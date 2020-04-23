//import React from 'react';
//import ReactDOM from 'react-dom';
import ListingData from './components/ListingData.jsx';

class RecommendationService extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className="title" >More homes you may like</div>
        <ListingData />
      </div>);
  }
}

ReactDOM.render(<RecommendationService />, document.getElementById('recommendations'));