import React, { useState } from 'react';
import ReactMapboxGl, { ZoomControl } from "react-mapbox-gl";

import VideoLayer from './VideoLayer';
import VideoPopup from './VideoPopup';
import './MapFrame.scss';

const Map = ReactMapboxGl({
  accessToken: ""
});

const MapFrame = (props) => {
  const [selectedVideo, selectVideo] = useState(null);

  return (
    <div className='MapFrame'>
      {/* eslint-disable-next-line */}
      <Map
        style="https://api.maptiler.com/maps/basic/style.json?key=RTkrAcFuX6L6NwSiRn6b" 
        center={[-1.733823,47.348622]}
      >
        <ZoomControl/>

        <VideoLayer onVideoSelect={video => selectVideo(video)} />

        {selectedVideo ? (
          <VideoPopup 
            onClose={() => selectVideo(null)}
            selectedVideo={selectedVideo}
          />
        ) : null}
      </Map>
    </div>
  )
};

export default MapFrame;
