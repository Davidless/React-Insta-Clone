import React from "react";

const PostHeader = props => {
  return (
    <div>
      <span>
        <img src={props.thumbnailUrl} alt={`${props.thumbnailUrl}`} />
        <b>{props.username}</b>
      </span>
    </div>
  );
};

export default PostHeader;
