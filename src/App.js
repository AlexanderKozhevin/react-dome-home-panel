import React, { Component } from 'react';
import './App.css';

import Xray from './Button'

import dome from './domehome.svg';


class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="header-gradient flex-row flex-main-center flex-second-end">
          <img src={dome} className="dome-img" alt="dome" />
        </div>
        <div className="ground-gradient ">
        </div>
      </div>
    );
  }
}



export default App;
