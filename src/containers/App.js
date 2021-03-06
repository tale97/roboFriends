import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions.js";

// mapStateToProps tell the component which state to listen to, in this case, listen to "searchField2"
const mapStateToProps = (state) => {
  console.log(state);

  return {
    searchField2: state.searchRobots.searchField2,
    robots2: state.receiveRobots.robots2,
    isPending: state.receiveRobots.isPending,
    error: state.receiveRobots.error,
  };
};

// actions are just objects; dispatch will send these actions to reducer, which will return a object desribing the new state
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange2: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch),
    // onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     robots: [],
  //     searchField: "",
  //   };
  // }

  // when search change, change the this.robots

  // This does work for onSearchChange(event) {}
  // onSearchChange = (event) => {
  //   this.setState({ searchField: event.target.value });
  //   console.log(this);
  //   console.log("change detected");
  // };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ robots: data }));
    this.props.onRequestRobots();
  }

  componentWillUnmount() {}

  render() {
    const { searchField2, robots2, isPending } = this.props;
    const filteredRobots = robots2.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField2.toLowerCase());
    });
    if (isPending) {
      return <h1 className="tc">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          ></link>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.props.onSearchChange2} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // subscribe the App Component to the Redux Store
