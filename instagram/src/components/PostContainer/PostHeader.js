import React from "react";

const PostHeader = () => {
  return (
    <div>
      <span>
        <img src={props.data.thumbnailUrl} alt={`${props.data.thumbnailUrl}`} />
        <b>{props.data.username}</b>
      </span>
    </div>
  );
};

export default PostHeader;
