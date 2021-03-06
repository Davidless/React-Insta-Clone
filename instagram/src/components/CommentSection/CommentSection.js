import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  addNewComment = e => {
    
  }

  render() {
    return (
      <div>
        {this.state.comments.map((com, i) => (
          <Comment key={i} com={com} />
        ))}
        <CommentInput />
      </div>
    );
  }
}

export default CommentSection;
