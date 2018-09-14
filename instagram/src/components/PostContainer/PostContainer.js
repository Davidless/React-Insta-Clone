import React from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div>
      {props.dummyData.map((posts, i) => (
        <ul key={i} posts={posts}>
          <Post posts={posts} />
        </ul>
      ))}
    </div>
  );
};

export default PostContainer;
