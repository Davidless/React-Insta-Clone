import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  return (
    <div>
      {props.dummyData.map((com, i) => (
          <ul key={i} com={com}>
          <Comment com={com} />
        </ul>
      ))}
    </div>
  );
};

export default CommentSection;
