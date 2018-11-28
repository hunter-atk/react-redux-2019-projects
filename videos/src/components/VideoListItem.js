import React from 'react';
import './VideoListItem.css';

const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <div className="videoListItem item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoListItem;
