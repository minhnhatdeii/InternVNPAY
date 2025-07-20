// src/pages/WatchPage.jsx
import React from "react";
import "./WatchPage.css";
import VideoSuggestCard from "../../components/layout/SuggestCard/SuggestCard";
import { CommentCard } from "../../components/layout/Comment/Comment";
import { fetchWatchPageData } from "../../store/watchPageSlice"

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";
import { useEffect } from "react";

import { useTranslation } from 'react-i18next';

const WatchDisplay = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const [expandedDescrip, setExpandedDescrip] = useState(false);
    const { videoId } = useParams();
    const {mainVideo, suggestedVideo, comments, loading, error} = useSelector(
    (state) => state.watchPage
  );

  const toggleDescription = () => {
    setExpandedDescrip(!expandedDescrip);
  };
  useEffect(() => {
    if ((!mainVideo || mainVideo.id !== videoId) && !loading) {
      dispatch(fetchWatchPageData(videoId));
    }
  }, [videoId, dispatch, mainVideo]);

    if (loading) return <p>Đang tải video...</p>;
    if (error) return <p>Đã xảy ra lỗi khi tải video.</p>;  

    console.log(mainVideo)
  return (
    <div className="watch-display">
      {/* Bên trái: Video player + thông tin */}
      <div className="left-watch-display">
        <div className="video-player">
          <iframe
            src={mainVideo?.mp4Video}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>

        <h2 style={{ margin: "16px 0", color: "white" }}>
          {mainVideo?.title}
        </h2>

        <div className="channel-info">
            <div className="channel-left">
                <img src={mainVideo?.avatarChannel} alt="channel" />
                <div className="channel-text">
                <h4>{mainVideo?.nameChannel}</h4>
                <p>{mainVideo?.numOfSubChannel}</p>
                </div>
                <button className="btn-subscribe">{t('subscribe')}</button>
            </div>

            <div className="video-actions">
                <div className="like-unlike">
                    <button>
                        <img src="/assets/images/5_like.png"/>
                        <span>{mainVideo?.likes}</span>
                    </button>
                    <button><img src="/assets/images/5_unlike.png"/></button>
                </div>
                <button className="btn-action"><img src="/assets/images/5_share.png"/>{t('share')}</button>
                <button className="btn-action"><img src="/assets/images/5_download.png"/>{t('dowload')}</button>
                <button className="btn-action"><img src="/assets/images/5_more.png"/></button>
            </div>
        </div>
        {/* description */}
        <div className="description-box">
          <div className="description-header">{mainVideo?.views} · {mainVideo?.publishedTimeVideo}</div>
            <div className={`description-content ${expandedDescrip ? "expanded" : ""}`} style={{ whiteSpace: 'pre-line' }}>
            {mainVideo?.description}
            </div>
            <button className="show-toggle" onClick={toggleDescription}>
        {expandedDescrip ? t('show less') : t('show more')}</button>
          </div>
          {/* comment */}
        <div className="comments-section">
            <div className="button-conmentsection">
                <h4>{mainVideo?.numOfComment} {t('comments')}</h4>
                <div className="sort-bar">
                    <img  src="/assets/images/5_sort.png"/>
                    <span>{t('sort by')}</span>
                </div>
            </div>
            
            <div className="add-comment">
                <img src="https://i.pravatar.cc/40" alt="user" className="avatar" />
                <input type="text" placeholder={t('add a comment')} />
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
      <div className="suggestcard-watchdisplay">
        {suggestedVideo.map((dataAPI) => (
                    <VideoSuggestCard key={dataAPI.id} video={dataAPI}/>
                ))}
      </div>
    </div>
  );
};

export default WatchDisplay;
