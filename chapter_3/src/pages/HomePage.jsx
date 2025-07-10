import { useRef } from "react";
import VideoCard from "../components/VideoCard";
import { videos } from "../datas/videocardData";
import "../styles/HomePage.css"
import { videoDataFromAPI } from "../datas/videocardData";
import { useYoutubeData } from "../hooks/useYoutubeData";

const  HomePage = ({onNavigate} ) => {
     const { videos, loading, error } = useYoutubeData();

    if (loading) return <p>Đang tải video...</p>;
    if (error) return <p>Đã xảy ra lỗi khi tải video.</p>;
    return (
        <div className="home-page">
            <div className="video-grid">
                {videos.map((dataAPI) => (
                    <VideoCard key={dataAPI.videoId} video={dataAPI} onNavigate={onNavigate}/>
                ))}
            </div>
        </div>
    );
    
}
export default HomePage;