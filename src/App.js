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
    // let chartData = [
    //   ["Time", "Score"],
    //   data.clanHistory.map(e => e.score)
    // ];
    return (
      <div className='App'>
        <ClanTagInput setData={setData} multipliers={scoreMultipliers} setMultipliers={setScoreMultipliers}/>
        <div className='tables'>
        <ClanDetails data={data}/>
        <Table data={data} multipliers={scoreMultipliers}/>
        </div>
        {/* <Card data={data}/> */}
        {/* <Chart
          chartType="ScatterChart"
          data={chartData}
          width="30em"
          // height="400px"
          legendToggle
        /> */}
      </div>
    );
  }

  
}

export default App;

