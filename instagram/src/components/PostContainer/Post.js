import React from "react";

const Post = props => {
  return <div>
            <span>
              <img src={props.data.thumbnailUrl} alt={`${props.data.thumbnailUrl}`} />
              <b>{props.data.username}</b>
            </span>
            <img src={props.data.imageUrl} alt={`${props.data.imageUrl}`} />
            <span>
              <b>{props.data.likes} likes</b>
            </span>
            <br />
            <span>{props.data.timestamp}</span>
        </div>
};

export default Post;
