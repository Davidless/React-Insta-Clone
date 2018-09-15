import React from "react";

const Comment = props => {
  return (
    <div>
      <span>
        <b>{props.com.username}</b> {props.com.text}
      </span>
    </div>
  );
};

export default Comment;
