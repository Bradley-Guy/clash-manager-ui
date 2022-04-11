import './App.css';
import axios from 'axios';
import React from 'react';
import Table from './components/Table.js'
import Card from './components/Card.js'

function App() {
  const url = "http://localhost:7071/api/ClanStats?clanTag=9YQQQ98";
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return <Table/>;

  return (
    <div className="App">
      <Table data={data}/>
      <Card data={data}/>
    </div>
  );
}

export default App;

