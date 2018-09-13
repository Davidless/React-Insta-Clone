import React from "react";
import Post from "./Post";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div>
      {props.dummyData.map((data, i) => (
        <ul key={i} data={data}>
          <Post data={data} />
          <CommentSection data={data} />
        </ul>
      ))}
    </div>
  );
};

export default PostContainer;
