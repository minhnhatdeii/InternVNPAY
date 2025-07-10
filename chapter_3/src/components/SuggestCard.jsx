// src/components/VideoSuggestCard.jsx
import React from "react";
import "../styles/SuggestCard.css";
import { videoDataFromAPI } from "../datas/videocardData";

const VideoSuggestCard = ({video}) => {
  return (
    <div className="suggest-card">
      <img src={video.thumbnail} alt="video thumbnail" className="suggest-thumbnail" />

      <div className="suggest-info">
        <h4 className="suggest-title">{video.title}</h4>
        <p className="suggest-channel">{video.channel}</p>
        <p className="suggest-meta">
          {video.view} • {video.pulishTimeText}
        </p>
      </div>
    </div>
  );
};

export default VideoSuggestCard;
