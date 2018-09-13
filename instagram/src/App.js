import React, { Component } from "react";
import dummyData from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import CommentSection from "./components/CommentSection/CommentSection";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData={dummyData} />
        <CommentSection dummyData={dummyData} />
      </div>
    );
  }
}

export default App;
