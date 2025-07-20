// src/components/VideoSuggestCard.jsx
import React from "react";
import "./SuggestCard.css";
import { useNavigate } from "react-router-dom";


const VideoSuggestCard = ({video}) => {
  const navigate = useNavigate();
  const handleWatchVideo = (videoId) => {
      navigate(`/watch/${videoId}`);
  };

  return (
    <div className="suggest-card">
      <img src={video.thumbnailVideo} alt="video thumbnail" className="suggest-thumbnail" onClick={() => {handleWatchVideo(video.id)}}/>

      <div className="suggest-info">
        <h4 className="suggest-title">{video.title}</h4>
        <p className="suggest-channel">{video.channel}</p>
        <p className="suggest-meta">
          {video.views} • {video.publishedTimeVideo}
        </p>
      </div>
    </div>
  );
};

export default VideoSuggestCard;
