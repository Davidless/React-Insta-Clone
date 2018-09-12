import React, { Component } from "react";
import dummyData from './dummy-data';

import SearchBar from "./components/SearchBar/SearchBar.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import CommentSection from "./components/CommentSection/CommentSection.js";

import "./App.css";

class App extends Component {
  state = {
    data: {dummyData}
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData={dummyData} />
        <CommentSection />
      </div>
    );
  }
}

export default App;
