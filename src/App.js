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
      </div>
    );
  } else {
    let chartData = [[0, 0]];
    if(data.history) {
      chartData = data.history.map((e, index) => [index * 15, e.score])
    }
    
    let options = {
      title: "Clan Trophies Over Time",
      legend: {position: "bottom"},
      hAxis: {title: "Time"},
      vAxis: {title: "Clan Trophies"}
    };
    chartData.unshift(["Time", "Score"]);

    let chartDataWar = [[0, 0]];
    if(data.history) {
      chartDataWar = data.history.map((e, index) => [index * 15, e.trophies]);
    }
    let optionsWar = {
      title: "Clan War Trophies Over Time",
      legend: {position: "bottom"},
      hAxis: {title: "Time"},
      vAxis: {title: "War Trophies"}
    };
    chartDataWar.unshift(["Time", "War Trophies"]);

    let chartDataMembers = [[0, 0]];
    if(data.history) {
      chartDataMembers = data.history.map((e, index) => [index * 15, e.members]);
    }
    let optionsMembers = {
      title: "Clan Members Over Time",
      legend: {position: "bottom"},
      hAxis: {title: "Time"},
      vAxis: {title: "Number of Members"}
    };
    chartDataMembers.unshift(["Time", "Member Count"]);
    return (
      <div className='App'>
        <ClanTagInput setData={setData} multipliers={scoreMultipliers} setMultipliers={setScoreMultipliers}/>
        <div className='tables'>
        <ClanDetails data={data}/>
        <Table data={data} multipliers={scoreMultipliers}/>
        </div>
        <Card data={data}/>
        <div className='chart'>
        <Chart
          className='chart'
          chartType="LineChart"
          data={chartData}
          legendToggle
          options={options}
        />
        </div>
        <div className='chart'>
        <Chart
          className='chart'
          chartType="LineChart"
          data={chartDataWar}
          legendToggle
          options={optionsWar}
        />
        </div>
        <div className='chart'>
        <Chart
          className='chart'
          chartType="LineChart"
          data={chartDataMembers}
          legendToggle
          options={optionsMembers}
        />
        </div>
      </div>
    );
  }

  
}

export default App;

