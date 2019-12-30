import React from 'react';
import { Popup } from "react-mapbox-gl";
import Vimeo from '@u-wave/react-vimeo';

import './VideoPopup.scss';

const VideoPopup = ({ onClose, selectedVideo }) => {
  const { geometry, properties } = selectedVideo;
  const videoId = properties.video_url.slice(properties.video_url.lastIndexOf('/') + 1);
  return (
    <Popup coordinates={geometry.coordinates} className='VideoPopup'>
      <header>
        {properties.name_en}
        <div className='btn-close' onClick={() => onClose()}>&times;</div>
      </header>
      <Vimeo video={videoId} autoplay />
    </Popup>
  );
};

export default VideoPopup;
