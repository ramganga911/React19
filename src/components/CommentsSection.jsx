import React, { useState } from "react";
import "../CommentsSection.css";

const Comment = ({ comment, addReply }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (replyText.trim()) {
      addReply(comment.id, replyText);
      setReplyText("");
      setShowReplyBox(false);
    }
  };

  return (
    <div
      className="comment-container"
      style={{ marginLeft: comment.parentId ? 20 : 0 }}
    >
      <div className="comment-box">
        <p>{comment.text}</p>
        <button
          className="reply-button"
          onClick={() => setShowReplyBox(!showReplyBox)}
        >
          Add a reply
        </button>
        {showReplyBox && (
          <div className="reply-input-container">
            <input
              type="text"
              className="reply-input"
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button className="submit-button" onClick={handleReply}>
              Submit
            </button>
          </div>
        )}
      </div>

      <div className="replies">
        {comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} addReply={addReply} />
        ))}
      </div>
    </div>
  );
};

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addReply = (parentId, text) => {
    const generateReply = (commentsList) => {
      return commentsList.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                text,
                parentId: comment.id,
                replies: [],
              },
            ],
          };
        } else {
          return {
            ...comment,
            replies: generateReply(comment.replies),
          };
        }
      });
    };

    setComments(generateReply(comments));
  };

  const addNewComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          text: newComment,
          parentId: null,
          replies: [],
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="comments-section">
      <h2>Comments Section</h2>
      <div className="new-comment-container">
        <input
          type="text"
          className="new-comment-input"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="submit-button" onClick={addNewComment}>
          Submit
        </button>
      </div>

      <div className="comments-list">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} addReply={addReply} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
