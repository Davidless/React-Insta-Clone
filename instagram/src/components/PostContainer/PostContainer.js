import React from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div>
      {props.posts.map((post, i) => (
        <ul key={i} post={post}>
          <Post post={post} />
        </ul>
      ))}
    </div>
  );
};

export default PostContainer;
