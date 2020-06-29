import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import users from "./users.json";
import Scroll from "./Scroll";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  // when search change, change the this.robots

  // This does work for onSearchChange(event) {}
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
    console.log(this);
    console.log("change detected");
  };

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  componentWillUnmount() {}

  render() {
    console.log(this.state.searchField);
    console.log(users);
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1 className="tc">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          ></link>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
