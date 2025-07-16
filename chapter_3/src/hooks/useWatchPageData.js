import { useEffect, useState } from "react";
import { getWatchPageData } from "../api/getWatchPage";
import { getCommentVideoData } from "../api/getCommentVideo.js";

export const useWatchPageData = (videoId) => {
  const [mainVideo, setMainVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [suggestedVideo, setSuggestedVideo] = useState([])

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchVideos = async () => {
        try {
        const data = await getWatchPageData(videoId);
        const listComments = await getCommentVideoData(videoId);
        setMainVideo(data.mainVideoWatchPage);
        setSuggestedVideo(data.suggestVideoWatchPage)
        setComments(listComments);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, [videoId]);
  return { mainVideo, suggestedVideo, comments,loading, error};
};
