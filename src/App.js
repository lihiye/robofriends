import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfild: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfild: event.target.value });
  };

  render() {
    const filterRobotts = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfild.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobotts} />;
      </div>
    );
  }
}

export default App;
