const commentsActionTypes = {
  ADD: "COMMENTS/ADD"
};

const commentsActionCreators = {
  ADD: (postId, username, text) => ({
    type: commentsActionTypes.ADD,
    payload: { postId, username, text }
  })
};

const commentsReducer = (comments, action) => {
  switch (action.type) {
    case commentsActionTypes.ADD:
      const newState = [
        ...comments,
        {
          id: comments.length + 1,
          postId: action.payload.postId,
          username: action.payload.username,
          text: action.payload.text
        }
      ];
      return newState;
    default:
      throw Error("Unknown action: " + action.type);
  }
};

export { commentsActionTypes, commentsActionCreators, commentsReducer };
