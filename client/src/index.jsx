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
        <h2>More homes you may like</h2>
        <Images />
        <Details />
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));