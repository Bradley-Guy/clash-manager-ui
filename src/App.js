import './App.css';
import React from 'react';
import Table from './components/Table.js'
import ClanTagInput from './components/ClanTagInput';

function App() {
  const [data, setData] = React.useState(null);

  if (!data) return (
    <div className='App'>
      <ClanTagInput setData={setData}/>
      <Table/>
    </div>
    );

  return (
    <div className='App'>
      <ClanTagInput setData={setData}/>
      <Table data={data}/>;
    </div>
  );
}

export default App;

