import "./VideoCard.css"
import { useNavigate } from "react-router-dom";

function VideoCard({video}) {

  const navigate = useNavigate();
  const handleWatchVideo = (videoId) => {
      navigate(`/watch/${videoId}`);
  };
  return (
    <div className="video-card">
      <div className="thumbnail-container">
        <img src={video.thumbnail} alt={video.title} onClick={() => {handleWatchVideo(video.id)}}/>
        <span className="duration">{video.duration}</span>
      </div>
      <div className="video-content">
          <div className="img-channel">
              <img src={video.channelThumbnail} alt="image"/>
          </div>
          <div className="video-info">
            <span className="title-video">{video.title}</span>
            <br/>
            <span className="channel">{video.channel}</span> 
            <br/>
            <span className="meta">{video.view} • {video.pulishTimeText}</span>
          </div>
          <div className="more-videocard">
              <img src="/assets/images/4_more.png" alt="more_image"/>
          </div>
      </div>
      
    </div>
  );
}
export default VideoCard;