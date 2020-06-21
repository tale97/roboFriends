import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  // when search change, change the this.robots
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    console.log(this.state.searchField);
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
