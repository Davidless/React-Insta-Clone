import React from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div>
      {props.dummyData.map((data, i) => (
        <ul key={i} data={data}>
          <Post data={data} />
        </ul>
      ))}
    </div>
  );
};

export default PostContainer;
