import React from "react";
import CommentSection from "../../components/CommentSection/CommentSection.js";

const PostContainer = props => {
  return (
    <div>
      {props.dummyData.map(
        (data, i) => (
          <ul key={i} data={data}>
            <span>
              <img src={data.thumbnailUrl} alt={`${data.thumbnailUrl}`} />
              {data.username}
            </span>
            <img src={data.imageUrl} alt={`${data.imageUrl}`} />
            <span>{data.likes} likes</span>
            <CommentSection />
            <span>{data.timestamp}</span>
          </ul>
        ),
        console.log(props)
      )}
    </div>
  );
};

export default PostContainer;
