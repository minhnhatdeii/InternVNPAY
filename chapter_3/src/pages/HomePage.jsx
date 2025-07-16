import VideoCard from "../components/VideoCard";
import "../styles/HomePage.css"
import { useYoutubeData } from "../hooks/useYoutubeData";

const  HomePage = () => {
    const { videos, loading, error } = useYoutubeData();
    
    if (loading) return <p>Đang tải video...</p>;
    if (error) return <p>Đã xảy ra lỗi khi tải video.</p>;
    return (
        <div className="home-page">
            <div className="video-grid">
                {videos.map((dataAPI) => (
                    <VideoCard key={dataAPI.id} video={dataAPI} />
                ))}
            </div>
        </div>
    );
    
}
export default HomePage;