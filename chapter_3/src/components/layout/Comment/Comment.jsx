// src/components/VideoSuggestCard.jsx
import "./Comment.css";


export const CommentCard = ({comment}) => {
  return (
        <div className="comment">
            <img src={comment.imageChannel} className="avatar" />
            <div className="comment-content">
            <div className="comment-header">
                <span className="username">{comment.handleChannel}</span>
                <span className="time">{comment.publishedTime}</span>
            </div>
            <p>{comment.text}</p>
            <span className="translate">Translate to Vietnamese</span>
            <div className="comment-actions">
                <button className="btn-action-comment">
                <img src="/assets/images/5_like.png" />
                <span>{comment.like}</span>
                </button>
                <button className="btn-action-comment">
                <img src="/assets/images/5_unlike.png" />
                </button>
                <span className="reply">Reply</span>
            </div>
            </div>
        </div>
  );
};
