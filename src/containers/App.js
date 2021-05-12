import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfild, setSearchfild] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
        console.log(count);
      });
  }, [count]); //only run if count changes.

  const onSearchChange = (event) => {
    setSearchfild(event.target.value);
  };

  const filterRobotts = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfild.toLowerCase());
  });
  if (!robots.length) {
    return <h1 className="tc">Loading</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filterRobotts} />;
        </Scroll>
      </div>
    );
  }
}

export default App;
