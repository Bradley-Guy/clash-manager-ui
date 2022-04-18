import './App.css';
import React from 'react';
import Table from './components/Table.js'
import ClanDetails from './components/ClanDetails';
import ClanTagInput from './components/ClanTagInput';
import Card from './components/Card.js'
import { Chart } from "react-google-charts";


function App() {
  const [data, setData] = React.useState(null);
  const [scoreMultipliers, setScoreMultipliers] = React.useState({
      trophies: 1,
      donationsSent: 1,
      donationsReceived: 1,
      lastSeen: 1,
      war: 1
    });

  if (!data) return (
    <div className='App'>
      <ClanTagInput setData={setData} multipliers={scoreMultipliers} setMultipliers={setScoreMultipliers}/>
      <div className='tables'>
      <ClanDetails/>
      <Table/>
      </div>
    </div>
    );

  else if(typeof data == 'string') {
    return (
      <div className='App'>
        <ClanTagInput setData={setData} multipliers={scoreMultipliers} setMultipliers={setScoreMultipliers}/>
        <div className='tables'>
        <ClanDetails data={data}/>
        <Table data={data} multipliers={scoreMultipliers}/>
        </div>
        {/* <Card data={data}/> */}
      </div>
    );
  } else {
    let chartData = data.history.map((e, index) => [index * 15, e.score]);
    chartData.unshift(["Time", "Score"]);
    console.log(JSON.stringify(chartData));
    return (
      <div className='App'>
        <ClanTagInput setData={setData} multipliers={scoreMultipliers} setMultipliers={setScoreMultipliers}/>
        <div className='tables'>
        <ClanDetails data={data}/>
        <Table data={data} multipliers={scoreMultipliers}/>
        </div>
        {/* <Card data={data}/> */}
        <div className='chart'>
        <Chart
          className='chart'
          chartType="LineChart"
          data={chartData}
          legendToggle
        />
        </div>
      </div>
    );
  }

  
}

export default App;

