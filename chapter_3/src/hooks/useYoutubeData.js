import { useEffect, useState } from "react";
import {getYoutubeHomeData} from "../api/youtubeApi.js";


export const useYoutubeData = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchVideos = async () => {
        try {
        const data = await getYoutubeHomeData();
        setVideos(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);
  return { videos, loading, error};
};
