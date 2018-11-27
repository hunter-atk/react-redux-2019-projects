import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoListItem video={video} />;
  });
  return renderedList;
};

export default VideoList;
