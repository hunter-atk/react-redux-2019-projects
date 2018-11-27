import React from 'react';
import './VideoListItem.css';

const VideoListItem = ({ video }) => {
  return (
    <div className="videoListItem item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoListItem;
