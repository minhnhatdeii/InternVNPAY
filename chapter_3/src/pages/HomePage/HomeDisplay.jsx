import VideoCard from "../../components/layout/VideoCard/VideoCard";
import "./HomePage.css"

import { useDispatch, useSelector  } from "react-redux";
import { useEffect } from "react";
import { fetchHomePageData } from "../../store/homePageSlice";

const  HomeDisplay = () => {
    const dispatch = useDispatch();
    const { videos, loading, error } = useSelector((state) => state.homePage);

     useEffect(() => {
        if ((!videos || videos.length === 0) && !loading) {
          dispatch(fetchHomePageData());
        }
      }, [videos, dispatch]);
    
    if (loading) return <p>Đang tải video...</p>;
    if (error) return <p>Đã xảy ra lỗi khi tải video.</p>;
    console.log(videos);
    return (
        <div className="home-display">
            <div className="video-grid">
                {videos?.map((dataAPI) => (
                    <VideoCard key={dataAPI.id} video={dataAPI} />
                ))}
            </div>
        </div>
    );
    
}
export default HomeDisplay;