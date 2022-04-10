import './App.css';
import axios from 'axios';
import React from 'react';

function App() {
  const url = "http://localhost:7071/api/ClanStats?clanTag=9YQQQ98";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      console.log("URL got");
      setPost(response.data);
    });
  }, []);

  console.log("i stay noided");

  if (!post) return null;

  return(
    <div className="App">
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {post.ranks.map(item => {
          return(
            <tr key={item[1].name}>
              <td>{item[1].name}</td>
              <td> { item[1].score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default App;

/*import logo from './logo.svg';
import axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  const url = "http://localhost:7071/api/ClanStats?clanTag=9YQQQ98";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      console.log("URL got");
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <p>Results:</p>
      <h1>{post.ranks[0][0]}</h1>

    </div>
  );

  /*return(
    <div className="App">
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {post.ranks.map(item => {
          return(
            <tr key={item[1].name}>
              <td>{item[1].name}</td>
              <td> { item[1].score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default App;*/
