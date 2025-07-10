// src/pages/WatchPage.jsx
import React from "react";
import "../styles/WatchPage.css";
import { useYoutubeData } from "../hooks/useYoutubeData";
import VideoSuggestCard from "../components/SuggestCard";

const WatchPage = () => {
    const { videos, loading, error } = useYoutubeData();

    if (loading) return <p>Đang tải video...</p>;
    if (error) return <p>Đã xảy ra lỗi khi tải video.</p>;  
  return (
    <div className="watch-page">
      {/* Bên trái: Video player + thông tin */}
      <div className="right-watch-page">
        <div className="video-player">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/watch?v=Q0lJaS4lpNY`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>

        <h2 style={{ margin: "16px 0", color: "white" }}>
          Mel Gibson Speaks for the First Time: “To this day, no one can explain it.”
        </h2>

        <div className="channel-info">
            <div className="channel-left">
                <img src="/assets/images/speed.jpg" alt="channel" />
                <div className="channel-text">
                <h4>The Spotlight List</h4>
                <p>69K subscribers</p>
                </div>
                <button className="btn-subscribe">Subscribe</button>
            </div>

            <div className="video-actions">
                <div className="like-unlike">
                    <button>
                        <img src="/assets/images/5_like.png"/>
                        <span>100K</span>
                    </button>
                    <button><img src="/assets/images/5_unlike.png"/></button>
                </div>
                <button className="btn-action"><img src="/assets/images/5_share.png"/> Share</button>
                <button className="btn-action"><img src="/assets/images/5_download.png"/> Download</button>
                <button className="btn-action"><img src="/assets/images/5_more.png"/></button>
            </div>
        </div>
        <div className="comments-section">
            <div className="button-conmentsection">
                <h4>51 Comments</h4>
                <div className="sort-bar">
                    <img  src="/assets/images/5_sort.png"/>
                    <span>Sort by</span>
                
                </div>
            </div>
            

            <div className="add-comment">
                <img src="https://i.pravatar.cc/40" alt="user" className="avatar" />
                <input type="text" placeholder="Add a comment..." />
            </div>

            <div className="comment">
                <img src="https://i.pravatar.cc/41" className="avatar" />
                <div className="comment-content">
                <div className="comment-header">
                    <span className="username">@oliviasmith0ullg</span>
                    <span className="time">1 month ago</span>
                </div>
                <p>This made my day better.</p>
                <span className="translate">Translate to Vietnamese</span>
                <div className="comment-actions">
                    <button className="btn-action-comment">
                    <img src="/assets/images/5_like.png" />
                    <span>1</span>
                    </button>
                    <button className="btn-action-comment">
                    <img src="/assets/images/5_unlike.png" />
                    </button>
                    <span className="reply">Reply</span>
                </div>
                </div>
            </div>

        </div>
      </div>

      {/* Bên phải*/}
      <div className="suggestcard-watchpage">
        {videos.map((dataAPI) => (
                    <VideoSuggestCard key={dataAPI.videoId} video={dataAPI}/>
                ))}
      </div>
    </div>
  );
};

export default WatchPage;
