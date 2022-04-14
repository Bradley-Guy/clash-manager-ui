import './App.css';
import React from 'react';
import Table from './components/Table.js'
import ClanTagInput from './components/ClanTagInput';
import Card from './components/Card.js'

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
      <Table/>
    </div>
    );

  return (
    <div className='App'>
      <ClanTagInput setData={setData} multipliers={scoreMultipliers} setMultipliers={setScoreMultipliers}/>
      <Table data={data} multipliers={scoreMultipliers}/>
      <Card data={data}/>
    </div>
  );
}

export default App;

