import React, { Component } from 'react';
import './App.css';
import '../node_modules/chartist/dist/chartist.min.css';

import Xray from './Button'

var dome =  require('./domehome.svg');

var tempimg =  require( './temperature.svg');
var oxygenimg =  require('./oxygen.svg');
var waterimg = require('./drop.svg');
var electricityimg =  require('./electricity.svg');

import ChartistGraph from 'react-chartist';




const Card = (props) => {
    return (<div className="card">
    <div className="card-header flex-row flex-main-center flex-second-center">
      <img src={props.icon} className="card-icon" alt="dome" />
      <div>{props.title}</div>
    </div>
      <ChartistGraph data={props.biPolarLineChartData} options={props.biPolarLineChartOptions} type={'Line'} />
    </div>)
}


class App extends Component {

  constructor(){
    super();
    this.state = {
      biPolarLineChartData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
          [1, 2, 3, 1, 2, 0, 1, 0],
          [8, 6, 4, 3, 8, 9, 1, 1]
        ]
      },
      biPolarLineChartOptions: {
        high: 10,
        low: 0,
        showArea: true,
        showLine: false,
        showPoint: false,
        axisX: {
          showLabel: false,
          showGrid: false
        }
      }

    }
  }

  render() {

    return (
      <div className="App">
        <div className="header-gradient flex-row flex-main-center flex-second-end">
          <img src={dome} className="dome-img" alt="dome" />
        </div>
        <div className="ground-gradient ">
        </div>
        <br />
        <div className="flex-row flex-main-center">
          <Card title="Temperature" icon={tempimg} {...this.state}  />
          <Card title="Water" icon={waterimg} {...this.state}  />
        </div>

        <div className="flex-row flex-main-center">
          <Card title="Oxygen" icon={oxygenimg} {...this.state}  />
          <Card title="Electricity" icon={electricityimg} {...this.state}  />
        </div>

      </div>
    );
  }
}



export default App;
