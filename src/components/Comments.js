import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Comments = ({ comments, onAddComment, postId }) => {
  const currentPostComments = comments.filter(
    (comment) => comment.postId === postId
  );

  const [text, setText] = useState("");
  const [username, setUsername] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAddCommentClick = (e) => {
    onAddComment(postId, username, text);
    setText("");
  };

  const theme = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h3>
        Post {postId} has {currentPostComments.length} comments
      </h3>
      <input
        placeholder="username"
        onChange={handleUsernameChange}
        value={username}
      />
      <br />
      <input
        placeholder="What do you think?"
        onChange={handleTextChange}
        value={text}
      />
      <br />
      <button onClick={handleAddCommentClick}>Add Comment</button>
      <hr />
      {currentPostComments.reverse().map((comment) => (
        <div key={comment.id}>
          <span>
            #{comment.id} | {comment.username} says:
          </span>
          <br />
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};
export default Comments;
