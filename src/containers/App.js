import React, { Component, Fragment } from "react";
import CardList from "../components/cards/CardList.js";
import SearchBox from "../components/search/SearchBox.js";
import ScrollBar from "../components/ScrollBar.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchData: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        this.setState({ robots: user });
      });
  }
  onSearchChange = (event) => {
    this.setState({ searchData: event.target.value });
  };
  render() {
    const { robots, searchData } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchData.toLocaleLowerCase());
    });
    return !robots.length ? (
      <div>There is no robots to Diaplay</div>
    ) : (
      <Fragment>
        <div className="tc">
          <h1>RobotFriends</h1>
          <div>
            <SearchBox searchChange={this.onSearchChange} />
            <ScrollBar>
              <CardList robots={filteredRobots} />
            </ScrollBar>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
