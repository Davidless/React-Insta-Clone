import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "../PostContainer/PostHeader";

const Post = props => {
  return (
    <div>
      <PostHeader
        username={props.posts.username}
        thumbnailUrl={props.posts.thumbnailUrl}
      />
      <div>
        <img src={props.posts.imageUrl} alt={`${props.posts.imageUrl}`} />
        <span>
          <b>{props.posts.likes} likes</b>
        </span>
        <br />
        <span>{props.posts.timestamp}</span>
      </div>
      <CommentSection data={props.posts.comments} />
    </div>
  );
};

export default Post;
