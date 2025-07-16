// src/pages/WatchPage.jsx
import React from "react";
import "../styles/WatchPage.css";
import VideoSuggestCard from "../components/SuggestCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useWatchPageData } from "../hooks/useWatchPageData";
import { CommentCard } from "../components/Comment";


const WatchPage = () => {
    const [expandedDescrip, setExpandedDescrip] = useState(false);
    const { videoId } = useParams();
    const {mainVideo, suggestedVideo, comments, loading, error} = useWatchPageData(videoId);

  const toggleDescription = () => {
    setExpandedDescrip(!expandedDescrip);
  };

    if (loading) return <p>Đang tải video...</p>;
    if (error) return <p>Đã xảy ra lỗi khi tải video.</p>;  

  return (
    <div className="watch-page">
      {/* Bên trái: Video player + thông tin */}
      <div className="left-watch-page">
        <div className="video-player">
          <iframe
            src={mainVideo.mp4Video}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>

        <h2 style={{ margin: "16px 0", color: "white" }}>
          {mainVideo.title}
        </h2>

        <div className="channel-info">
            <div className="channel-left">
                <img src={mainVideo.avatarChannel} alt="channel" />
                <div className="channel-text">
                <h4>{mainVideo.nameChannel}</h4>
                <p>{mainVideo.numOfSubChannel}</p>
                </div>
                <button className="btn-subscribe">Subscribe</button>
            </div>

            <div className="video-actions">
                <div className="like-unlike">
                    <button>
                        <img src="/assets/images/5_like.png"/>
                        <span>{mainVideo.likes}</span>
                    </button>
                    <button><img src="/assets/images/5_unlike.png"/></button>
                </div>
                <button className="btn-action"><img src="/assets/images/5_share.png"/> Share</button>
                <button className="btn-action"><img src="/assets/images/5_download.png"/> Download</button>
                <button className="btn-action"><img src="/assets/images/5_more.png"/></button>
            </div>
        </div>
        {/* description */}
        <div className="description-box">
          <div className="description-header">{mainVideo.views} · {mainVideo.publishedTimeVideo}</div>
            <div className={`description-content ${expandedDescrip ? "expanded" : ""}`} style={{ whiteSpace: 'pre-line' }}>
            {mainVideo.description}
            </div>
            <button className="show-toggle" onClick={toggleDescription}>
        {expandedDescrip ? "Show less" : "Show more"}</button>
          </div>
          {/* comment */}
        <div className="comments-section">
            <div className="button-conmentsection">
                <h4>{mainVideo.numOfComment} Comments</h4>
                <div className="sort-bar">
                    <img  src="/assets/images/5_sort.png"/>
                    <span>Sort by</span>
                </div>
            </div>
            
            <div className="add-comment">
                <img src="https://i.pravatar.cc/40" alt="user" className="avatar" />
                <input type="text" placeholder="Add a comment..." />
            </div>
            {
              comments ? (
                comments.map((item) => <CommentCard key={item.id} comment={item}/>)
              ) : (
                <p>Đang tải bình luận...</p>
              )
            }
        </div>
      </div>

      {/* Bên phải*/}
      <div className="suggestcard-watchpage">
        {suggestedVideo.map((dataAPI) => (
                    <VideoSuggestCard key={dataAPI.id} video={dataAPI}/>
                ))}
      </div>
    </div>
  );
};

export default WatchPage;
