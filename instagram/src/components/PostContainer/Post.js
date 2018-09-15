import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "../PostContainer/PostHeader";

const Post = props => {
  return (
    <div>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div>
        <img src={props.post.imageUrl} alt={`${props.post.imageUrl}`} />
        <br />
        <span>
          <b>{props.post.likes} likes</b>
        </span>
        <br />
        <span>{props.post.timestamp}</span>
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
