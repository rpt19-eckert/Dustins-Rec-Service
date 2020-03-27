import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Images from './components/Images.jsx';
import Details from './components/Details.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>
          <div className="title">More homes you may like</div>
          <Images />
          <Details />
        </div>
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));