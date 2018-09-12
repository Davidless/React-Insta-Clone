import React from "react";

const PostContainer = props => {
  return (
    <div>
      {props.dummyData.map((data, i) => (
        <div key={i} data={data} />
      ))}
    </div>
  );
};

export default PostContainer;
