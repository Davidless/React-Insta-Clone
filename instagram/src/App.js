import React from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";


class App extends React.Component {
  state = {
    posts: []
    // filteredposts: []
  };

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData={this.state.posts} />
      </div>
    );
  }
}

export default App;
