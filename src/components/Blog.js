import { useState, useReducer } from "react";
import Comments from "./Comments";
import {
  commentsReducer,
  commentsActionCreators
} from "../reducers/commentsReducer";

export default function Blog({ blogData, initialComments }) {
  const [currentPostId, setCurrentPostId] = useState(1);
  const currentPost = blogData
    .filter((post) => post.id === currentPostId)
    .pop();

  const [comments, dispatch] = useReducer(commentsReducer, initialComments);
  const onAddComment = (postId, username, text) => {
    const action = commentsActionCreators.ADD(postId, username, text);
    dispatch(action);
  };

  return (
    <div className="row">
      <div className="col-4">
        {blogData.map((post) => (
          <article key={post.id}>
            <header>{post.title}</header>
            <p>
              {post.teaser}
              <br />
              <a href={"#" + post.id} onClick={() => setCurrentPostId(post.id)}>
                See more
              </a>
              <br />
              Comments:{" "}
              {comments.filter((comment) => comment.postId === post.id).length}
            </p>
          </article>
        ))}
      </div>
      <div className="col-8">
        Current Post: {currentPostId}
        <br />
        <em>{currentPost.text}</em>
        <Comments
          comments={comments}
          onAddComment={onAddComment}
          postId={currentPostId}
        />
      </div>
    </div>
  );
}
